export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();
    const identifier = (body.email || body.phone || '').trim().toLowerCase();
    const password = (body.password || '').trim();

    if (!identifier || !password) {
      return new Response(JSON.stringify({ success: false, message: 'कृपया ईमेल/मोबाइल और पासवर्ड दर्ज करें' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    let user = null;
    if (env && env.DB) {
      try {
        user = await env.DB.prepare(
          "SELECT id, name, email, role, phone FROM users WHERE (LOWER(email) = ? OR phone = ?) AND password = ?"
        ).bind(identifier, identifier, password).first();
      } catch (dbErr) {
        console.error('D1 query error:', dbErr);
      }
    }

    // Default accounts fallback
    if (!user) {
      const defaultUsers = [
        { id: 1, name: 'श्याम नारायण विश्वकर्मा (प्रधानाचार्य)', email: 'principal@kdpublicschool.edu.in', phone: '9935155645', password: 'KD@Principal2026', role: 'superadmin' },
        { id: 2, name: 'विद्यालय प्रबंधक (School Admin)', email: 'admin@kdpublicschool.edu.in', phone: '9450156061', password: 'KD@Admin2026', role: 'admin' },
        { id: 3, name: 'शिक्षक (Teacher)', email: 'teacher@kdpublicschool.edu.in', phone: '9935155645', password: 'KD@Teacher2026', role: 'teacher' },
        { id: 4, name: 'छात्र (Student)', email: 'student@kdpublicschool.edu.in', phone: '9450156081', password: 'KD@Student2026', role: 'student' }
      ];
      user = defaultUsers.find(u => 
        (u.email.toLowerCase() === identifier || u.phone === identifier) && u.password === password
      );
    }

    if (!user) {
      return new Response(JSON.stringify({ success: false, message: 'अमान्य ईमेल/मोबाइल या पासवर्ड। कृपया पुनः प्रयास करें।' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const userData = {
      id: user.id,
      _id: String(user.id),
      name: user.name,
      email: user.email,
      role: user.role,
      phone: user.phone
    };

    const userCookie = encodeURIComponent(JSON.stringify(userData));
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Set-Cookie': `kd_auth_user=${userCookie}; Path=/; Max-Age=2592000; SameSite=Lax`
    });

    return new Response(JSON.stringify({
      success: true,
      message: 'लॉगिन सफल रहा!',
      user: userData
    }), { status: 200, headers });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message || 'सर्वर त्रुटि' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

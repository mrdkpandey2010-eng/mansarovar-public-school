export async function onRequestGet(context) {
  const { request } = context;
  const cookieHeader = request.headers.get('Cookie') || '';
  const match = cookieHeader.match(/kd_auth_user=([^;]+)/);
  if (match) {
    try {
      const user = JSON.parse(decodeURIComponent(match[1]));
      return new Response(JSON.stringify({ success: true, user }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (e) {
      console.error(e);
    }
  }
  return new Response(JSON.stringify({ success: false, message: 'Not authenticated' }), {
    status: 401,
    headers: { 'Content-Type': 'application/json' }
  });
}

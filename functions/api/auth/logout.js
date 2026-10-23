export async function onRequestPost() {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Set-Cookie': 'kd_auth_user=; Path=/; Max-Age=0; SameSite=Lax'
  });
  return new Response(JSON.stringify({ success: true, message: 'Logged out successfully' }), {
    status: 200,
    headers
  });
}

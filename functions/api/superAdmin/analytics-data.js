export async function onRequestGet() {
  const data = {
    totalStudents: 450,
    totalTeachers: 24,
    attendanceRate: 94.6,
    activeClasses: 14,
    recentEnrollments: 12
  };
  return new Response(JSON.stringify({ success: true, data }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

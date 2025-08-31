export async function GET() {
  return Response.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    env: {
      nodeEnv: process.env.NODE_ENV,
      hasResendKey: !!process.env.RESEND_API_KEY,
      resendKeyLength: process.env.RESEND_API_KEY?.length || 0,
      resendKeyPrefix: process.env.RESEND_API_KEY?.substring(0, 8) + '...' || 'none',
    },
    platform: process.platform
  });
}
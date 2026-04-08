// TODO: Replace with ConvertKit/Beehiiv/Buttondown API call
export async function subscribeEmail(email: string) {
  console.log('Subscribe:', email);
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { success: true };
}

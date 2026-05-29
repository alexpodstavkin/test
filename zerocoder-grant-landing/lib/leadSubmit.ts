interface LeadPayload {
  name: string;
  phone: string;
  email: string;
  formId: string;
}

// TODO: подключить GetCourse webhook (/pl/api/deals + /pl/api/users) через скилл getcourse-api
export async function leadSubmit(payload: LeadPayload): Promise<boolean> {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.log("[lead]", payload);
  }
  await new Promise((r) => setTimeout(r, 600));
  return true;
}

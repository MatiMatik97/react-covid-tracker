export const apiRequest = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);
    return response.json() as Promise<T>;
  } catch (error) {
    throw new Error(error);
  }
};

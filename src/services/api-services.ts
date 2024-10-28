// /* eslint-disable prefer-const */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// class HttpError extends Error {
//   status: number;
//   payload: any;
//   constructor({ status, payload }: { status: number; payload: any }) {
//     super("HttpError");
//     this.status = status;
//     this.payload = payload;
//   }
// }
// const apiService = async (
//   method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
//   url: string,
//   dataRequest?: any,
//   options?: any,
//   param?: any
// ) => {
//   const refreshToken = localStorage.getItem("refreshToken");
//   const accessToken = localStorage.getItem("token");
//   const body = dataRequest ? JSON.stringify(dataRequest) : undefined;
//   const baseHeaders = options
//     ? { ...options }
//     : { "Content-Type": "application/json" };
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const fullUrl = `${baseUrl}/${url}`;
//   const controller = new AbortController();
//   const timeoutId = setTimeout(() => controller.abort(), 300000);
//   try {
//       const res = await fetch(fullUrl, {
//         headers: {
//           ...baseHeaders,
//           ...param,
//           Authorization: `Bearer ${accessToken}`,
//           "X-Refresh-Token": refreshToken || "",
//         },
//         credentials: "include",
//         body,
//         method,
//         signal: controller.signal,
//       });
//       const payload = await res.json();
//       const dataResponse = {
//         status: res.status,
//         payload,
//       };
//       clearTimeout(timeoutId);

//       if (!res.ok) {
//         throw new HttpError(dataResponse);
//       }
//       return dataResponse;
//   } catch (error) {
//     clearTimeout(timeoutId);
//     throw error;
//   }

// };
// export default apiService;

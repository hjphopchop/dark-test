import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://135.181.35.61:2112",
  }),
  endpoints: (build) => ({
    getContacts: build.query<any, any>({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWF4IiwiaWF0IjoxNjU0MzgxMTI2LCJleHAiOjE2NTQ5ODU5MjZ9.jVqiX-AFwk2tSenmKVGwZd0xbKWXckWf49WGdsni_1Y`,
        },
      }),
    }),
    updateContacts: build.mutation<any, any>({
      query: ({contacts,id}) => ({
        url: `/contacts/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWF4IiwiaWF0IjoxNjU0MzgxMTI2LCJleHAiOjE2NTQ5ODU5MjZ9.jVqiX-AFwk2tSenmKVGwZd0xbKWXckWf49WGdsni_1Y`,
        },
        body: { ...contacts },
      }),
    }),
  }),
});

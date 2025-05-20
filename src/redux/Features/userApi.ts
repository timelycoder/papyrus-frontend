/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (userId) => `/user/${userId}`,
      providesTags: (id) => [{ type: "User", id }],
    }),

    getAllUsers: builder.query<any, void>({
      query: () => "/user",
      providesTags: ["User"],
    }),

    updateUser: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/user/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (arg) => [{ type: "User", id: arg.id }],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation, useGetAllUsersQuery } =
  userApi;

export type UserUpdateInput = {
  bio?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  location?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};

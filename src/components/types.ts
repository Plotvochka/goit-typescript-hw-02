export type Image = {
  id: string;
  urls: {
    small: string;
    medium: string;
    full: string;
  };
  alt_description: string | null;
  description?: string;
  user: {
    name: string;
  };
  likes: number;
};

import { z } from "zod";

const loginValidation = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const request = {
  email: "j@j.com",
  password: "",
};

loginValidation.parse(request);

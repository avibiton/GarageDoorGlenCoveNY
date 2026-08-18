export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  comments: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  comments?: string;
}

export function validateContactForm(data: ContactFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[\d\s\-().+]{7,}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!data.comments.trim()) {
    errors.comments = "Please describe how we can help you.";
  }

  return errors;
}

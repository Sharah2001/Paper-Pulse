// src/utils/api.ts
import axios from "axios";
import { Event, JoinEventResponse, RegisterForm, RegisterResponse } from "@/app/types";

export type Accessory = {
  _id: string;
  name: string;
  category: "Tote Bag" | "Bookmark";
  price: number;
  image: string;
};

const API_URL = "http://localhost:3001"; // backend API URL root

export const fetchAccessories = async (): Promise<Accessory[]> => {
  const res = await axios.get(`${API_URL}/accessories`);
  return res.data;
};

const mockEvents: Event[] = [
  {
    _id: "1",
    title: "Book Club Meetup",
    description: "Join our weekly book club to discuss the latest bestsellers.",
    price: 500
  },
  {
    _id: "2",
    title: "Author Q&A",
    description: "An exclusive Q&A session with our monthly featured author.",
    price: 1500
  },
  {
    _id: "3",
    title: "Poetry Night",
    description: "A cozy evening of poetry readings and coffee.",
    price: 300
  }
];

export const api = {
  register: async (form: RegisterForm): Promise<RegisterResponse> => {
    // Backend expects 'name' instead of 'fullName' based on SignUpDto
    const { fullName, ...rest } = form;
    const res = await axios.post(`${API_URL}/auth/signup`, {

      name: fullName,
      ...rest
    });
    return { token: res.data.access_token };
  },
  getEvents: async (): Promise<Event[]> => {
    // Mocking since backend EventsModule is missing
    return Promise.resolve(mockEvents);
  },
  getBooks: async (): Promise<any[]> => {
    const res = await axios.get(`${API_URL}/books`);
    return res.data;
  },
  payForEvent: async (eventId: string, token: string): Promise<JoinEventResponse> => {

    const event = mockEvents.find(e => e._id === eventId);
    return Promise.resolve({
      event: { title: event?.title || "Unknown Event" },
      status: "success"
    });
  }
};
export const payForEvent = async (eventId: string, token: string): Promise<JoinEventResponse> => {
  const res = await axios.post(`http://localhost:3001/payments/create-checkout-session`, { eventId }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};


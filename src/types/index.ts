export interface DestinationProps {
  id: number;
  name: string;
  routeStatus: {
    isOperational: boolean;
    nonOperationalReason: string | null;
  };
  shuttles: ShuttleProps[];
}
export interface CelestialBodyProps {
  id: number;
  name: string;
  type: string;
  parent: string;
  description: string;
  images: string[];
}
export interface ShuttleProps {
  shuttles: [];
  id: number;
  name: string;
  capacity: number;
  launchpadLocation: string;
  basePrice: string;
  discount: number;
  etd: number; // Estimated Time for Departure
  eta: number; // Estimated Time for Arrival
  availableSeats: string[];
}

export interface ExtraProps {
  id: number;
  name: string;
  price: string;
}

import { MapContainer } from 'react-leaflet';

export const LeafletMap = ({ children, ...props }) => {
  if (typeof window === 'undefined') {
    return null;
  }

  return <MapContainer {...props}>{children}</MapContainer>;
};

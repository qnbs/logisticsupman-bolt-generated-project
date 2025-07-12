import React from 'react';
    import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
    import 'leaflet/dist/leaflet.css';

    const App = () => {
      return (
        <div className="app">
          <header className="header">
            <h1>Logistics and Supply Chain Management</h1>
          </header>
          <main className="main">
            <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: "100vh", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </main>
        </div>
      );
    };

    export default App;

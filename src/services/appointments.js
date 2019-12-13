const data = [
  {
    id: "1",
    patientName: "Sample Patient",
    patientPhone: "123-456-7890",
    practitionerName: "Sample Practitioner",
    clinicName: "Foo Bar Inc.",
    clinicAddress: "123 Fake Street, Kitchener, ON, N1O 1N0",
    clinicPhone: "987-654-3211",
    date: new Date(),
    confirmed: false
  },
  {
    id: "2",
    patientName: "Patient Sample",
    patientPhone: "123-456-7890",
    practitionerName: "Practitioner Sample",
    clinicName: "Boo Far Co.",
    clinicAddress: "678 Artificial Ave., Kitchener, ON, N1O 1N0",
    clinicPhone: "987-654-3211",
    date: new Date(),
    confirmed: false
  }
];

const getAppointments = () => {
  return new Promise(r => r(data));
}

const getAppointmentById = (id) => {
  const appointment = getAppointments().find(appt => appt.id === id);
  if (!appointment) {
    return new Promise(r => r({}));
  }
  return new Promise(r => r(appointment));
}

export { getAppointments, getAppointmentById }

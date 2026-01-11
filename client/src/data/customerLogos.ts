export type CustomerLogo = { src: string; alt: string; width?: number; height?: number };

export const customerLogos: CustomerLogo[] = [
  { src: "https://cdn.simpleicons.org/amd/ED1C24", alt: "AMD", width: 120, height: 48 },
  { src: "https://cdn.simpleicons.org/dell/007DB8", alt: "Dell", width: 120, height: 48 },
  { src: "https://cdn.simpleicons.org/lenovo/E2231A", alt: "Lenovo", width: 120, height: 48 },
  { src: "https://cdn.simpleicons.org/cisco/1BA0D7", alt: "Cisco", width: 120, height: 48 },
  { src: "https://cdn.simpleicons.org/oracle/F80000", alt: "Oracle", width: 120, height: 48 },
  { src: "https://cdn.simpleicons.org/sap/0FAAFF", alt: "SAP", width: 120, height: 48 },
  { src: "https://cdn.simpleicons.org/salesforce/00A1E0", alt: "Salesforce", width: 120, height: 48 },
  { src: "https://cdn.simpleicons.org/adobe/FF0000", alt: "Adobe", width: 120, height: 48 },
  { src: "https://cdn.simpleicons.org/servicenow/62D84E", alt: "ServiceNow", width: 120, height: 48 },
  { src: "https://cdn.simpleicons.org/intuit/0077C5", alt: "Intuit", width: 120, height: 48 },
  { src: "https://cdn.simpleicons.org/vmware/607078", alt: "VMware", width: 120, height: 48 },
  { src: "https://cdn.simpleicons.org/stripe/008CDD", alt: "Stripe", width: 120, height: 48 },
];

export const customerNames = customerLogos.map(l => l.alt);

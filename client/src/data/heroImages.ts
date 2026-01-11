import plumbingVanImg from "@assets/generated_images/Plumbing_service_technician_van_e593e2ab.png";
import hvacRooftopImg from "@assets/generated_images/HVAC_rooftop_maintenance_crew_8730e67b.png";
import landscapingImg from "@assets/generated_images/Landscaping_crew_at_work_08505499.png";
import electricalPanelImg from "@assets/generated_images/Electrical_panel_installation_work_afbd56f0.png";
import windowCleaningImg from "@assets/generated_images/Window_cleaning_service_crew_48c5903c.png";
import contractorConstructionImg from "@assets/generated_images/Contractor_managing_construction_project_dad9770c.png";
import hvacIndoorImg from "@assets/generated_images/HVAC_indoor_maintenance_work_ce120b17.png";
import plumbingRepairImg from "@assets/generated_images/Commercial_plumbing_repair_work_e0122842.png";
import electricianSiteImg from "@assets/generated_images/Electrician_at_commercial_site_6bbc3d30.png";
import cleaningCrewImg from "@assets/generated_images/Commercial_cleaning_team_at_work_41335b1a.png";
import contractorPlansImg from "@assets/generated_images/Contractor_reviewing_site_plans_45dcb8eb.png";
import facilitiesMaintenanceImg from "@assets/generated_images/Facilities_maintenance_technician_working_ae0c3c74.png";

export type HeroImage = { src: string; alt: string; label: string };

export const leftImages: HeroImage[] = [
  { src: hvacRooftopImg, alt: "HVAC technicians servicing rooftop commercial unit", label: "HVAC" },
  { src: electricalPanelImg, alt: "Electrician installing electrical panel", label: "Electrical" },
  { src: landscapingImg, alt: "Professional landscaping crew maintaining commercial property", label: "Landscaping" },
  { src: cleaningCrewImg, alt: "Commercial cleaning team servicing office building", label: "Janitorial" },
  { src: contractorConstructionImg, alt: "Construction manager overseeing project site", label: "General Contracting" },
  { src: facilitiesMaintenanceImg, alt: "Facilities technician performing HVAC maintenance", label: "Facilities" },
];

export const rightImages: HeroImage[] = [
  { src: plumbingVanImg, alt: "Plumbing service technician with company van", label: "Plumbing" },
  { src: hvacIndoorImg, alt: "HVAC technician servicing indoor commercial unit", label: "HVAC Service" },
  { src: plumbingRepairImg, alt: "Plumber repairing commercial pipe installation", label: "Pipe Repair" },
  { src: electricianSiteImg, alt: "Electrician working on commercial site wiring", label: "Electrical Service" },
  { src: windowCleaningImg, alt: "Window cleaning crew servicing commercial building", label: "Window Cleaning" },
  { src: contractorPlansImg, alt: "Contractor reviewing blueprints at job site", label: "Construction Mgmt" },
];

export const uniqueLabels = Array.from(
  new Set([...leftImages, ...rightImages].map(img => img.label))
);

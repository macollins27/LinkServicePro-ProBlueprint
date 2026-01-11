import hvacImage from "@assets/generated_images/HVAC_tech_on_roof_fabd6de8.png";
import electricianImage from "@assets/generated_images/Electrician_at_panel_dd2b86b4.png";
import plumberImage from "@assets/generated_images/Plumber_with_pipes_deebcd49.png";
import lawnCareImage from "@assets/generated_images/Lawn_care_crew_8b6af2c3.png";
import windowCleaningImage from "@assets/generated_images/Window_cleaning_lift_430c9638.png";
import floorScrubberImage from "@assets/generated_images/Floor_scrubbing_work_737d81db.png";

const collageImages = [
  hvacImage,
  electricianImage,
  plumberImage,
  lawnCareImage,
  windowCleaningImage,
  floorScrubberImage
];

interface SectionDividerCollageProps {
  variant?: "collage" | "torn";
}

export default function SectionDividerCollage({ variant = "collage" }: SectionDividerCollageProps) {
  if (variant === "torn") {
    return <TornPaperDivider />;
  }

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className="relative w-full h-16 sm:h-20 overflow-hidden"
    >
      <div 
        className="absolute inset-0 flex"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.3) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.3) 100%)`
        }}
      >
        {collageImages.map((src, idx) => (
          <div
            key={idx}
            className="flex-1 relative"
            style={{
              minWidth: `${100 / collageImages.length}%`
            }}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                objectPosition: "center"
              }}
            />
          </div>
        ))}
      </div>
      
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, rgba(10,19,38,0.6) 0%, transparent 15%, transparent 85%, rgba(10,19,38,0.6) 100%)"
        }}
      />
    </div>
  );
}

function TornPaperDivider() {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className="relative w-full h-8"
    >
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,20 Q30,10 60,15 T120,20 T180,15 Q210,22 240,18 T300,20 T360,15 Q390,25 420,20 T480,18 T540,20 Q570,15 600,20 T660,18 T720,22 Q750,15 780,20 T840,18 T900,20 Q930,25 960,18 T1020,20 T1080,15 Q1110,20 1140,18 L1200,20 L1200,40 L0,40 Z"
          className="fill-white dark:fill-slate-900"
        />
      </svg>
    </div>
  );
}

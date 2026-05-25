import project1 from "../assets/analog-only_solar_panel.jpg";
// import project2 from "../assets/aura_band.jpg"; 
// import project3 from "../assets/mindtress.jpg";

export const projectData = {
  "analog-only_solar_panel": {
    title: "Analog-Only Solar Panel",
    subtitle: "Auto Charging and Auto Tracing to Light Source",
    image: project1,
    year: "Apr - May 2026",
    role: "Team Leader - Hardware Design & Simulation",
    technologies: ["Altium", "Autodesk Fusion 360", "Circuit Design", "Circuit Soldering", "Simulation Tooling"],
    demoLink: "",
    youtubeId: "FNNe58Oodu4",
    overview: "This project shows an analog-only solar energy system that automatically tracks a light source and charges its own battery. The system uses two LDR sensors, comparators with hysteresis (LM358), a DC motor, and a motor driver (L298N). The solar panel rotates toward brighter light directions. The system is designed to operate without external power, even in cloudy conditions, using power-saving methods. The tracking resolution is less than 10 degrees, and the system avoids unstable motor vibration (jiggling).",
    
    // Explicit dynamic table data
    tableData: {
      headers: ["OUT_L", "OUT_R", "Motor Action"],
      rows: [
        ["1", "0", "Rotate left"],
        ["0", "1", "Rotate right"],
        ["0", "0", "Stop"],
        ["1", "1", "Stop"]
      ]
    },
    
    // Ordered architectural layout points
    details: [
      "Light detection: The system uses two Light Dependent Resistors (LDR) sensors placed on opposite sides of the solar panel.",
      "Comparator with Hysteresis: LM358 operational amplifier is used as a comparator. Hysteresis is added using positive feedback resistors to prevent rapid switching.",
      "Resolution optimization: Achieved smaller than 10 degrees angle accuracy with no jiggling operation when the light source is fixed."
    ],
    
    gallery: [
      { label: "Circuit Design", url: project1 },
      { label: "Sketch Design", url: project1 },
      { label: "Block Diagram", url: project1 }
    ]
  },

  "aura_band": {
    title: "AURA Band",
    subtitle: "Real-Time Voice-Activated Safety Device for the Visually Impaired",
    image: project1,
    year: "2026",
    role: "Embedded Systems & AI Lead",
    technologies: ["C++", "Edge Impulse", "ESP32-S3", "FreeRTOS"],
    demoLink: "https://github.com/thaoton1910/ENG209-Final-Project",
    youtubeId: "saMwA9GqaNc",
    overview: "The AURA Band is a real-time voice-activated safety device designed to assist visually impaired pedestrians in urban environments. The system continuously captures and processes 16 kHz audio signals using an INMP441 I2S microphone, applies MFCC feature extraction, and runs a trained convolutional neural network (CNN) to classify spoken commands namely “AURA” (wake word), “WALK”, “CROSS”, “HELP”, and “CANCEL”.",
    
    tableData: {
      headers: ["State", "LED Color", "Animation", "Buzzer"],
      rows: [
        ["SLEEP", "Red", "Single LED blink (200 ms)", "OFF"],
        ["AURA_WAKE", "Cyan", "Rotating animation (40 ms/frame)", "OFF"],
        ["WALK", "Yellow", "Static all LEDs (100 ms)", "OFF"],
        ["CROSS", "Orange", "Flashing (300 ms cycle)", "ON/OFF toggle"],
        ["HELP", "Red", "Rapid flash (100 ms cycle)", "Continuous ON"]
      ]
    },
    details: [
      "Task 1: Audio Capture runs continuously on Core 0 to minimize latency using I2S DMA.",
      "Task 2: AI Inference performs on-device machine learning inference every 1 second via Edge Impulse embedded classifier.",
      "Task 3: Output Animation reads the state machine and drives high-visibility LED animations independent of inference latency."
    ],
    gallery: [
      { label: "Circuit Design", url: project1 },
      { label: "DSP Pipeline", url: project1 },
      { label: "Block Diagram", url: project1 }
    ]
  },

  "mindtress": {
    title: "MINDTRESS Device",
    subtitle: "Biometric Emotional Status Detection & Stress Alleviation",
    image: project1,
    year: "2026",
    role: "Full-Stack Hardware Architect",
    technologies: ["Arduino IDE", "Tinkercad", "Autodesk Fusion 360"],
    demoLink: "https://github.com/thaoton1910/portfolio",
    youtubeId: "",
    overview: "Our product detects users' emotional status (relaxed, normal, good, and not good) based on heart rate and then suggests audio for relaxation or meditation.",
    
    tableData: null,
    details: [
      "Successfully detected emotional states in user testing and ran healing music.",
      "Reduced response latency to <5 seconds for mindfulness recommendations.",
      "Cost-optimized: manufacturing cost of 900.000 VNĐ vs market competitors at over 3 million VNĐ."
    ],
    gallery: [
      { label: "Circuit Design", url: project1 },
      { label: "Sketch Design", url: project1 },
      { label: "Block Diagram", url: project1 }
    ]
  }
};
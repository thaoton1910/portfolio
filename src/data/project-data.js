import project1 from "../assets/analog-only_solar_panel.jpg";
import project2 from "../assets/aura_band.jpg";
import project3 from "../assets/mindtress_device.jpg";

// Analog-Only Solar Panel images
import project1_circuit_design from "../assets/analog-only_solar_panel/circuit_design.png";
import project1_block_diagram from "../assets/analog-only_solar_panel/block_diagram.png";
import project1_sketch_design from "../assets/analog-only_solar_panel/sketch_design.png";
import project1_simulation_less from "../assets/analog-only_solar_panel/simulation_less.png";
import project1_simulation_equal from "../assets/analog-only_solar_panel/simulation_equal.png";

// AURA Band images
import project2_sleep from "../assets/aura_band/sleep.jpg";
import project2_aura_wake from "../assets/aura_band/aura_wake.jpg";
import project2_walk from "../assets/aura_band/walk.jpg";
import project2_cross from "../assets/aura_band/cross.jpg";
import project2_help from "../assets/aura_band/help.jpg";

import project2_circuit_design from "../assets/aura_band/circuit_design.png";
import project2_block_diagram from "../assets/aura_band/block_diagram.png";
import project2_dsp_pipeline from "../assets/aura_band/dsp_pipeline.png";

export const projectData = {
  // Project 1
  "analog-only_solar_panel": {
    title: "Analog-Only Solar Panel",
    subtitle: "Auto Charging and Auto Tracing to Light Source",
    image: project1,
    link: "/projects/analog-only_solar_panel",
    timeline: "Apr 2026 - May 2026",
    role: "Team Leader - Hardware Design & Simulation",
    technologies: [
      "Altium",
      "Autodesk Fusion 360",
      "Circuit Design",
      "Circuit Soldering",
      "Simulation Tooling",
    ],
    demoLink: "",
    youtubeIdss: ["FNNe58Oodu4"],
    overview:
      "This project shows an analog-only solar energy system that automatically tracks a light source and charges its own battery. The system uses two LDR sensors, comparators with hysteresis (LM358), a DC motor, and a motor driver (L298N). The solar panel rotates toward brighter light directions. The system is designed to operate without external power, even in cloudy conditions, using power-saving methods. The tracking resolution is less than 10 degrees, and the system avoids unstable motor vibration (jiggling).",

    details: [
      {
        main: "Light Detection",
        subDetails: [
          "The system uses two Light Dependent Resistors (LDR) sensors placed on opposite sides of the solar panel.",
          {
            text: "When the solar panel is aligned with the light source:",
            deepDetails: [
              "Both LDRs receive equal light",
              "Their voltage is equal",
              "The motor stops rotating",
            ],
          },
          {
            text: "When one side receives more light:",
            deepDetails: [
              "The resistance of LDR with more light decreases",
              "The comparator output changes state",
              "The motor rotates toward the brighter direction",
            ],
          },
        ],
      },
      {
        main: "Comparator with Hysteresis",
        subDetails: [
          "LM358 operational amplifier is used as a comparator. Hysteresis is added using positive feedback resistors.",
          {
            text: "Why hysteresis is important:",
            deepDetails: [
              "Prevents rapid switching",
              "Avoids motor vibration",
              "Creates a stable dead zone",
              "Improves system reliability",
            ],
          },
          "Comparator 1 (V_HIGH): Detects when LEFT sensor is brighter (voltage exceeds threshold).",
          "Comparator 2 (V_LOW): Detects when RIGHT sensor is brighter (voltage drops below threshold).",
          "Dead Zone: When light is centered, both comparators stay unchanged → NO MOTOR MOVEMENT.",
        ],
      },
      {
        main: "Motor Operation Logic",
        hasEmbeddedTable: true,
      },
    ],

    tableData: {
      headers: ["OUT_L", "OUT_R", "Motor Action"],
      rows: [
        ["1", "0", "Rotate left"],
        ["0", "1", "Rotate right"],
        ["0", "0", "Stop"],
        ["1", "1", "Stop"],
      ],
    },

    componentsList: {
      Hardware: [
        "Solar Panel 2W 6V",
        "Diode 1N4007, Potentiometers (20k, 100k), Resistors (680k, 1k, 100k, 220k)",
        "LM358P IC OPAMP",
        "TP4056 Battery Charger Module",
        "18650 lithium-ion battery",
        "Boost DC-DC MT3608",
        "DC Motor",
        "L298N Mini",
      ],
      Sensors: ["Light Dependent Resistors 5MM"],
      Software: ["Altium", "Autodesk Fusion 360"],
    },

    results: [
      "Auto charging and prove that the system can be self-sustainable on cloudy days (operate continuously without external power - require power saving functions).",
      "No jiggling operation when the light source is fixed, or when placed under the sun.",
      "Tracking resolution verified within precision geometric margins (<10 degrees execution window).",
    ],

    gallery: [
      { label: "Circuit Design", url: project1_circuit_design },
      { label: "Sketch Design", url: project1_sketch_design },
      { label: "Block Diagram", url: project1_block_diagram },
      { label: "Simulation (LDR1 < LDR2)", url: project1_simulation_less },
      { label: "Simulation (LDR1 = LDR2)", url: project1_simulation_equal },
    ],

    references: [
      {
        authorsAndYear: "ROHM Co., Ltd. (2018).",
        title: "Hysteresis setting for comparator.",
        publication: "Application Note Data Report.",
        link: "https://fscdn.rohm.com/en/products/databook/applinote/ic/amp_linear/comparator/gpl_cmp_hysteresis-e.pdf",
      },
    ],
  },

  // Project 2
  aura_band: {
    title: "AURA Band",
    subtitle:
      "Real-Time Voice-Activated Safety Device for the Visually Impaired",
    image: project2,
    link: "/projects/aura_band",
    timeline: "Apr 2026 - May 2026",
    role: "Team Leader, Data Collector, AI Trainer, Debugger of FreeRTOS Code, and Hardware Setup Supporter",
    technologies: [
      "Circuit design",
      "C++",
      "AI Training on Edge Impulse",
      "Digital Processing Pipeline (DSP)",
      "FreeRTOS",
    ],
    demoLink: "https://github.com/thaoton1910/ENG209-Final-Project",
    youtubeIds: "saMwA9GqaNc",
    overview:
      "The AURA Band is a real-time voice-activated safety device designed to assist visually impaired pedestrians in urban environments. The system continuously captures and processes 16 kHz audio signals using an INMP441 I2S microphone, applies MFCC feature extraction, and runs a trained convolutional neural network (CNN) to classify spoken commands namely “AURA” (wake word), “WALK”, “CROSS”, “HELP”, and “CANCEL”. Upon command detection, the device produces coordinated LED patterns (rotating cyan for awake state, steady yellow for walking, flashing orange/buzzer for street crossing, rapid red for emergencies) and buzzer alerts, providing real-time feedback to both the user and surrounding traffic. The current prototype demonstrates a complete hardware-to-output pipeline with 360 training samples (6 minutes of audio), dual-core FreeRTOS execution, and reliable field validation (~87.5%).",
    details: [
      {
        main: "Task 1: Audio Capture (Core 0, Priority 3)",
        subDetails: [
          "Runs continuously on Core 0 to minimize latency and ensure consistent microphone sampling.",
          "Configured for 16 kHz sampling with I2S DMA (Direct Memory Access) to offload data transfer from the CPU. ",
        ],
      },
      {
        main: "Task 2: AI Inference (Core 1, Priority 2)",
        subDetails: [
          "Performs on-device machine learning inference every 1 second using Edge Impulse's optimized neural network model.",
          {
            text: "The inference pipeline includes:",
            deepDetails: [
              "1-second audio buffering (16,000 samples at 16 kHz)",
              "Edge Impulse embedded classifier with confidence scoring",
              "Adaptive confidence thresholds: 50% for WALK/CROSS/HELP, 70% for AURA, and 65% for background noise rejection",
              "State machine management: SLEEP, AURA_WAKE, WALK, CROSS, HELP",
              "Anti-jitter logic: 300ms inference cool-down, 10s wake timeout, 2s command validation window",
              "Boot safety period: 3s ignore detections to prevent false positives during startup",
            ],
          },
        ],
      },
      {
        main: "Task 3: Output Animation (Core 1, Priority 1):",
        hasEmbeddedTable: true,
      },
    ],

    tableData: {
      headers: ["State", "LED Color", "Animation", "Buzzer", "Photo"],
      rows: [
        ["SLEEP", "Red", "Single LED blink (200ms)", "OFF", project2_sleep],
        [
          "AURA_WAKE",
          "Cyan",
          "Rotating animation (40ms/frame)",
          "OFF",
          project2_aura_wake,
        ],
        ["WALK", "Yellow", "Static all LEDs (100ms)", "OFF", project2_walk],
        [
          "CROSS",
          "Orange",
          "Flashing (300ms cycle)",
          "ON/OFF Toggle Patterns",
          project2_cross,
        ],
        [
          "HELP",
          "Red",
          "Rapid flash (100ms cycle)",
          "Continuous Audio Alert Tone",
          project2_help,
        ],
      ],
    },

    componentsList: {
      Hardware: [
        "ESP32-S3-WROOM-2",
        "Active Buzzer",
        "Adafruit NeoPixel Ring (16RGB LEDs, WS2812B)",
      ],
      Sensors: ["INMP441 I2S MEMS Omnidirectional Microphone"],
      Software: ["C++", "Circuit Designer", "Edge Impulse"],
    },

    results: [
      "The hardware prototype was fully assembled on a breadboard, comprising the ESP32-S3 (YOLO UNO), INMP441 I2S microphone, WS2812 16-LED NeoPixel ring, and active buzzer.",
      "A test sequence simulating all state transitions (SLEEP → AURA_WAKE → WALK → CROSS → HELP → CANCEL → SLEEP) was executed, confirming that the LED ring and buzzer respond correctly to logic outputs from the firmware.",
    ],

    gallery: [
      { label: "Circuit Design", url: project2_circuit_design },
      { label: "Block Diagram", url: project2_block_diagram },
      { label: "DSP Pipeline", url: project2_dsp_pipeline },
    ],
    references: [],
  },

  // Project 3
  mindtress_device: {
    title: "MINDTRESS Device",
    subtitle:
      "Emotion Detection and Relaxation Audio Suggestion Device Based on Heart Rate",
    image: project3,
    link: "/projects/mindtress_device",
    timeline: "2026",
    role: "Full-Stack Hardware Architect",
    technologies: [
      "Arduino IDE",
      "Tinkercad",
      "Autodesk Fusion 360",
      "Algorithm Design",
    ],
    demoLink: "https://github.com/thaoton1910/portfolio",
    youtubeIds: ["rQ2yPGzgwn4", "Kuk6izGT7W0"],
    overview:
      "Our product detects users' emotional status (relaxed, normal, good, and not good) based on heart rate and then suggests audio for relaxation or meditation.",

    details: [
      {
        main: "Biometric Calibration Vectors:",
        subDetails: [
          "Utilizes standard empirical biological boundaries mapped via comparative literature (Madona, 2017) to classify metrics into 4 user profiles: Relaxed, Normal, Good, and Not Good.",
          "Filters high exertion profiles (such as athletics) out of the stress evaluation paths to mitigate false-positive stress indicators.",
        ],
      },
      {
        main: "Somatic Stress Remediation:",
        subDetails: [
          "Detects adrenaline and cortisol cardiovascular stress ripples and immediately initiates localized acoustic therapy tracks.",
          "Lowers physiological markers by triggering systematic relaxation reactions through targeted auditory therapy configurations.",
        ],
      },
    ],

    tableData: null,

    componentsList: {
      Hardware: [
        "Arduino Uno Development Board",
        "I2C LCD Display Interface Adapter Module",
        "16x2 Character Alphanumeric LCD Panel Module",
        "DFRobot Mini MP3 Playback Core Electronics Module",
      ],
      Sensors: [
        "DFRobot Gravity MAX3010 PPG Heart Rate & Oximeter Sensor Core",
      ],
      Software: [
        "Arduino IDE (Embedded C++)",
        "Tinkercad Virtualization Workbench",
        "Autodesk Fusion 360 Visual Modeler",
      ],
    },

    results: [
      "Validated end-user biofeedback state monitoring loops across multiple live test participants.",
      "Optimized recommendation engine lookup execution bounds to under 5 seconds from initial somatic spike anomalies.",
      "Drastic pricing optimization achieved: Formulated production costing at 900,000 VNĐ, undercutting direct market equivalents priced at 3,000,000+ VNĐ.",
    ],

    gallery: [
      { label: "Circuit Layout Wiring Diagram", url: project1 },
      { label: "Enclosure CAD Sketch Model", url: project1 },
      { label: "Algorithmic Logic Block Diagram", url: project1 },
    ],

    references: [
      {
        authorsAndYear: "Madona, P. (2017).",
        title:
          "Alat Pendeteksi Tingkat Stress Manusia Berdasarkan Suhu Tubuh, Kelembaban Kulit, Tekanan Darah dan Detak Jantung.",
        publication: "Jurnal Elementer, 3(2), 31-42.",
        link: "https://doi.org/10.35143/elementer.v3i2.194",
      },
      {
        authorsAndYear:
          "Widanti, N., Sumanto, B., Rosa, P., & Miftahudin, M. F. (2015).",
        title:
          "Stress level detection using heart rate, blood pressure, and GSR and stress therapy by utilizing infrared.",
        publication:
          "IEEE International Conference on Industrial Instrumentation and Control (ICIC), 275-279.",
        link: "#",
      },
    ],
  },
};

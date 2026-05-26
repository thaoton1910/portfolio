import project1 from "../assets/analog-only_solar_panel.jpg";
import project2 from "../assets/aura_band.jpg";
import project3 from "../assets/mindtress_device.png";

export const projectData = {
  "analog-only_solar_panel": {
    title: "Analog-Only Solar Panel",
    subtitle: "Auto Charging and Auto Tracing to Light Source",
    image: project1,
    link: "/projects/analog-only_solar_panel",
    year: "Apr 2026 - May 2026",
    role: "Team Leader - Hardware Design & Simulation",
    technologies: [
      "Altium",
      "Autodesk Fusion 360",
      "Circuit Design",
      "Circuit Soldering",
      "Simulation Tooling",
    ],
    demoLink: "",
    youtubeId: "FNNe58Oodu4",
    overview:
      "This project shows an analog-only solar energy system that automatically tracks a light source and charges its own battery. The system uses two LDR sensors, comparators with hysteresis (LM358), a DC motor, and a motor driver (L298N). The solar panel rotates toward brighter light directions. The system is designed to operate without external power, even in cloudy conditions, using power-saving methods. The tracking resolution is less than 10 degrees, and the system avoids unstable motor vibration (jiggling).",

    details: [
      {
        main: "Light Detection",
        subDetails: [
          {
            text: "The system uses two Light Dependent Resistors (LDR) sensors placed on opposite sides of the solar panel.",
          },
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
          {
            text: "LM358 operational amplifier is used as a comparator. Hysteresis is added using positive feedback resistors.",
          },
          {
            text: "Why hysteresis is important:",
            deepDetails: [
              "Prevents rapid switching",
              "Avoids motor vibration",
              "Creates a stable dead zone",
              "Improves system reliability",
            ],
          },
          {
            text: "Comparator 1 (V_HIGH): Detects when LEFT sensor is brighter (voltage exceeds threshold).",
          },
          {
            text: "Comparator 2 (V_LOW): Detects when RIGHT sensor is brighter (voltage drops below threshold).",
          },
          {
            text: "Dead Zone: When light is centered, both comparators stay unchanged → NO MOTOR MOVEMENT.",
          },
        ],
      },
      {
        main: "Threshold Trigger Windows & Operational Logic Matrix:",
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
      { label: "Circuit Design", url: project1 },
      { label: "Sketch Design", url: project1 },
      { label: "Block Diagram", url: project1 },
      { label: "Simulation", url: project1 },
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

  aura_band: {
    title: "Aura Band",
    subtitle:
      "Real-Time Voice-Activated Safety Device for the Visually Impaired",
    image: project2,
    link: "/projects/aura_band",
    year: "2026",
    role: "Embedded Systems & AI Lead",
    technologies: [
      "C++",
      "Edge Impulse",
      "ESP32-S3",
      "FreeRTOS",
      "Signal Processing",
    ],
    demoLink: "https://github.com/thaoton1910/ENG209-Final-Project",
    youtubeId: "saMwA9GqaNc",
    overview:
      "The AURA Band is a real-time voice-activated safety device designed to assist visually impaired pedestrians in urban environments. The system continuously captures and processes 16 kHz audio signals using an INMP441 I2S microphone, applies MFCC feature extraction, and runs a trained convolutional neural network (CNN) to classify spoken commands namely “AURA” (wake word), “WALK”, “CROSS”, “HELP”, and “CANCEL”.",

    details: [
      {
        main: "Task 1: Real-Time Audio Capture Engine (Core 0, Priority 3)",
        subDetails: [
          "Maintains low-latency bounds by isolating audio collection loops onto Core 0.",
          "Configured for 16 kHz sampling profiles utilizing hardware I2S Direct Memory Access (DMA) to bypass CPU utilization bottlenecks.",
        ],
      },
      {
        main: "Task 2: Neural Inference Engine (Core 1, Priority 2)",
        subDetails: [
          "Executes TinyML analytical iterations on-device every 1000ms using compiled Edge Impulse deployment binaries.",
          "Applies adaptive threshold targets: 70% Confidence for AURA keyword validation, 50% for standard operation directives (WALK/CROSS/HELP), and 65% for background noise rejection matrices.",
          "Anti-jitter scheduling: Includes a 300 ms model cooldown, a 10s automatic sleep timeout wrapper, and a 2s response sequence validation window.",
        ],
      },
      {
        main: "Task 3: Independent Animation State Engine (Core 1, Priority 1) & State Matrix Table:",
        hasEmbeddedTable: true,
      },
    ],

    tableData: {
      headers: ["State", "LED Color", "Animation", "Buzzer Feedback"],
      rows: [
        ["SLEEP", "Red", "Single LED blink (200 ms)", "OFF"],
        ["AURA_WAKE", "Cyan", "Rotating animation (40 ms/frame)", "OFF"],
        ["WALK", "Yellow", "Static all LEDs (100 ms)", "OFF"],
        [
          "CROSS",
          "Orange",
          "Flashing (300 ms cycle)",
          "ON/OFF Toggle Patterns",
        ],
        [
          "HELP",
          "Red",
          "Rapid flash (100 ms cycle)",
          "Continuous Audio Alert Tone",
        ],
      ],
    },

    componentsList: {
      Hardware: [
        "ESP32-S3-WROOM-2 Dual-Core Controller",
        "WS2812B 16-RGB NeoPixel LED Ring Module",
        "Active Piezo Buzzer Module",
      ],
      Sensors: ["INMP441 I2S MEMS Omnidirectional Microphone"],
      Software: [
        "Edge Impulse Studio Framework",
        "FreeRTOS Scheduling Kernel",
        "C++ Hardware Logic Architecture",
      ],
    },

    results: [
      "Hardware validation maps flawless sequential execution tracking (SLEEP → AURA_WAKE → WALK → CROSS → HELP → CANCEL → SLEEP).",
      "Achieved high-accuracy performance bounds (~87.5% validation accuracy).",
      "Model optimization evaluated with 360 processed training samples totaling 6 minutes of structural audio arrays.",
    ],

    gallery: [
      { label: "Hardware Schematic Diagram", url: project1 },
      { label: "Digital Signal Processing Pipeline", url: project1 },
      { label: "FreeRTOS Dual-Core Architecture", url: project1 },
    ],
    references: [],
  },

  mindtress: {
    title: "MINDTRESS Device",
    subtitle:
      "Emotion Detection and Relaxation Audio Suggestion Device Based on Heart Rate",
    image: project3,
    year: "2026",
    role: "Full-Stack Hardware Architect",
    technologies: [
      "Arduino IDE",
      "Tinkercad",
      "Autodesk Fusion 360",
      "Algorithm Design",
    ],
    demoLink: "https://github.com/thaoton1910/portfolio",
    youtubeId: "User 1 Video ID",
    overview:
      "Our product detects users’ emotional status (relaxed, normal, good, and not good) based on heart rate and then suggests audio for relaxation or meditation.",

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

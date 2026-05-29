import project1 from "../assets/analog-only_solar_panel.jpg";
import project2 from "../assets/aura_band.jpg";
import project3 from "../assets/mindtress_device.jpg";
import project4 from "../assets/mini_submarine.png";
import project5 from "../assets/mini_boat.png";
import project6 from "../assets/tank_toy.png";

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

// MINDTRESS Device images
import project3_circuit_design from "../assets/mindtress_device/circuit_design.png";
import project3_block_diagram from "../assets/mindtress_device/block_diagram.png";

import project3_sketch_design_side from "../assets/mindtress_device/sketch_design_side.png";
import project3_sketch_design_back from "../assets/mindtress_device/sketch_design_back.png";
import project3_sketch_design_top from "../assets/mindtress_device/sketch_design_top.png";
import project3_sketch_design_front from "../assets/mindtress_device/sketch_design_front.png";

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
    timeline: "Apr 2024 - May 2024",
    role: "Team Leader - Arduino Software Engineer",
    technologies: [
      "Arduino IDE",
      "Circuit Design",
      "C++",
      "Design & Systems Thinking (DST)",
      "Tinkercad",
    ],
    youtubeIds: ["rQ2yPGzgwn4", "Kuk6izGT7W0"],
    overview:
      "Our product detects users' emotional status (relaxed, normal, good, and not good) based on heart rate and then suggests audio for relaxation or meditation.",

    details: [
      {
        main: "Detecting the emotional status (relaxed, normal, good, and not good) based on the heart rate",
      },
      {
        main: "Suggesting solutions for relaxation including meditation music",
      },
      {
        main: "How emotional status relates to heart rate",
        subDetails: [
          {
            text: "The table below (Stress Parameter) contains parameters used to decide whether an individual belongs to relaxed, calm, tense, and stress which are taken from a study conducted by Madona, 2017.",
            hasEmbeddedTable: true,
          },
          "There is no significant difference between the digital heart rate calculated by calibrator and the values shown by the sensor (Widanti et al, 2015). Therefore, we can use the above graph to standardize the ideal stress level based on the heartbeat. Furthermore, instead of defining the stress level (relaxed, calm, tense, and stressed), we transform into relaxed, normal, good, and not good (or “you need to pay attention more to your status now”) because when someone plays sports, they can have high heart rate, so we do not conclude they are stressed just depending on heart rate.",
          "When you experience stress, this triggers the release of hormones like adrenaline and cortisol, which increase your heart rate and blood pressure.",
        ],
      },
      {
        main: "How relaxation music alleviates stress",
        subDetails: [
          "Relaxation music has been found to lower levels of cortisol, the primary stress hormone.",
          " When you listen to soothing music, it triggers the relaxation response in your body, which helps reduce the release of cortisol.",
        ],
      },
    ],

    tableData: {
      headers: ["Condition", "GSR", "HR (bpm)", "BP (cmHg)", "H&T"],
      rows: [
        ["Relaxed", "<2", "60-70", "100/70-110/75", "36-37"],
        ["Calm", "2-4", "70-90", "110/75-120/85", "35-36"],
        ["Tense", "4-7", "90-100", "120/90-130/110", "33-35"],
        ["Stressed", ">6", ">100", "BPS > 130, BPD > 110", "<33"],
      ],
    },

    componentsList: {
      Hardware: [
        "Arduino Uno",
        "I2C LCD Adapter",
        "LCD Display",
        "Mini MP3 Player Module",
      ],
      Sensors: [
        "FRobot Gravity: MAX3010 PPG Heart Rate and Oximeter Sensor    ",
      ],
      Software: [
        "Arduino IDE (C++ with emotion algorithm)",
        "Tinkercad",
        "Autodesk Fusion",
      ],
    },

    results: [
      "Successfully detected emotional states in user testing and ran healing music ",
      "Reduced response latency to <5 seconds for mindfulness recommendations.",
      "Validated with 2 end-users.",
      "Cost-optimized: our product 900.000 VNĐ vs. market competitors at <3 millions VNĐ.",
    ],

    gallery: [
      { label: "Circuit Design", url: project3_circuit_design },
      { label: "Block Diagram", url: project3_block_diagram },
      { label: "Sketch Design - Side View", url: project3_sketch_design_side },
      { label: "Sketch Design - Back View", url: project3_sketch_design_back },
      { label: "Sketch Design - Top View", url: project3_sketch_design_top },
      {
        label: "Sketch Design - Front View",
        url: project3_sketch_design_front,
      },
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
          "Widanti, N., Sumanto, B., Rosa, P., & Miftahudin, M. F. (2015, May).",
        title:
          "Stress level detection using heart rate, blood pressure, and GSR and stress therapy by utilizing infrared.",
        publication:
          "IEEE International Conference on Industrial Instrumentation and Control (ICIC), 275-279.",
        link: "",
      },
    ],
  },

  // Project 4
  mini_submarine: {
    title: "Mini Submarine",
    subtitle: "",
    image: project4,
    link: "/projects/mini_submarine",
    // timeline: "Apr",
    // role: "Team Leader",
    // technologies: [
    //   "Arduino IDE",
    //   "Circuit Design",
    //   "C++",
    //   "Design & Systems Thinking (DST)",
    //   "Tinkercad",
    // ],
    youtubeIds: ["UGvT6joORzM"],
  },

  // Project 5
  mini_boat: {
    title: "Mini Boat",
    subtitle: "",
    image: project5,
    link: "/projects/mini_boat",
    // timeline: "Apr",
    // role: "Team Leader",
    // technologies: [
    //   "Arduino IDE",
    //   "Circuit Design",
    //   "C++",
    //   "Design & Systems Thinking (DST)",
    //   "Tinkercad",
    // ],
    youtubeIds: ["WxTcQTeB9eA"],
  },

  // Project 6
  tank_toy: {
    title: "Tank Toy",
    subtitle: "",
    image: project6,
    link: "/projects/tank_toy",
    // timeline: "Apr",
    // role: "Team Leader",
    // technologies: [
    //   "Arduino IDE",
    //   "Circuit Design",
    //   "C++",
    //   "Design & Systems Thinking (DST)",
    //   "Tinkercad",
    // ],
    youtubeIds: ["EpvNFwHMxbM"],
  }
};

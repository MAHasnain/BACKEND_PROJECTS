src/
├── config/ # Database, Redis, Cloud provider keys
├── controllers/ # Request receive karna aur Response bhejna (videoController.js)
├── middlewares/ # Interceptors: auth.js, uploadLimit.js, errorHandler.js
├── models/ # Mongoose schemas (Video.js, User.js)
├── routes/ # API endpoints map karna (v1/videoRoutes.js)
├── services/ # Core business logic (videoTranscodeService.js)
├── queues/ # BullMQ job producers aur consumers (videoQueue.js)
├── storage/ # S3 ya local storage functions (s3Uploader.js)
├── utils/ # Helper functions (generateId.js, formatTime.js)
└── validators/ # Zod/Joi schemas API payload test karne ke liye

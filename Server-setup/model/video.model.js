const videoSchema = new mongoose.Schema({
    title: { type: String, required: true, maxLength: 100 },
    description: {
        type: String
    }, // Status enum backend state manage karne ke liye 
    status: {
        type: String, enum: ['UPLOADING', 'PROCESSING', 'PUBLISHED', 'FAILED'],
        default: 'UPLOADING'
    },
    // Raw file ka s3 path (internal use) 
    rawVideoPath: {
        type: String
    }, // Final HLS playlist URL (m3u8) jo frontend play karega 
    videoUrl: {
        type: String
    }, // Image link 
    thumbnailUrl: {
        type: String
    }, // Metadata duration: { type: Number }, // seconds me 
    views: {
        type: Number,
        default: 0
    }, // Reference to User Collection 
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        index: true // Faster queries for "My Videos" 
    }
}, { timestamps: true });

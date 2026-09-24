import mongoose from 'mongoose';

export type LeadStatus = 'new' | 'contacted' | 'not_contacted' | 'followed_up' | 'deal_done' | 'not_interested';

const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  requirementType: { type: String },
  timeline: { type: String },
  message: { type: String },
  fileName: { type: String },
  fileSize: { type: String },
  fileType: { type: String },
  fileData: { type: String },
  fileUrl: { type: String },
  status: {
    type: String,
    enum: ['new', 'contacted', 'not_contacted', 'followed_up', 'deal_done', 'not_interested'],
    default: 'new',
  },
  createdAt: { type: Date, default: Date.now },
});

// Ensure schema has new paths if cached in Next.js dev runtime
if (mongoose.models.Lead && !mongoose.models.Lead.schema.paths['fileData']) {
  mongoose.models.Lead.schema.add({
    fileName: { type: String },
    fileSize: { type: String },
    fileType: { type: String },
    fileData: { type: String },
    fileUrl: { type: String },
  });
}

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);

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
  status: {
    type: String,
    enum: ['new', 'contacted', 'not_contacted', 'followed_up', 'deal_done', 'not_interested'],
    default: 'new',
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);

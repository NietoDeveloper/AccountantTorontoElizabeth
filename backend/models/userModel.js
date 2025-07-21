import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: {
    type: String,
    default:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAUlEQVR4nO3dv2/TQBjG8TBAkTrAWgYqlU6dqFQJBgpDkRi6UHmlcgd+bZQytIDub/+iA5OkwXLskPge+55HuqWVkvfej+4uTRp7MnEcx3Ecx3Ecx3EcZ0QB7gMvgQ/ADRAyGzfAe+A49iI1xi7wTaApQWRcxZ6kwngEfBdoQhAbsSc7fWPcAT4LTD6Ijk+xR32CPBGYdBAfe32CvBaYcBAfJ32CnAlMOIiPsz5BCoEJB/FRGITkCAYhfeMNQvpmG4T0DTYI6ZtqENI30iACzQsGSd+wYJDNfR5xUQ2ld5+z/MPwAngwV9fD6mep68oSpATu1dR2FzgXqC8rkLIOQwwlG5CyCUMIJQuQsg2GCMroQcouGAIoowYpV8FIjDJakPJ/MBZQ3hlEACMRyuhWSLlOjAQoowIpN4HRM8poQM5jw1o09Kjh90ctH2OTB/0oQMplK2OukcWS+to+1qZWyuBByg4YjROeqy8lyqBBLpf9Kz//bjFtQNqibAFfDDJr2nFHjNABpO259Mogs4Y97YgROoIsRQEODTJr1mlHjLACSCNKrMEgs0b9BB7XfFWu6WXpKiB/UW6dV/G5qxp8qC+gnFZbR9zPv676KqbFi47L6nuRh9Vzrhtj8K+y1jphxOszCAbxCsErZBpvWWJbAj5DDIIPdbxChrIlIF7f2qM+YcTrMwgG8QrBK2Qab1liWwI+QwyCD3W8QoayJSBe39qjPmHE6zMIBvEKwStkGm9ZYlsCPkMMgg91vEKGsiUgXt/aoz5hxOszCOMHUbiQciG+Qt7mdqnxQhzkJLeL8RfiIHt9364i3lHHINT24GOvt6uoUHYSX1KvEF0h/d/QZeGWR/E2Pwbhdw+uFr94lAJlq7ohVrwx1nWGK+S6mvuL2ItJrgEOGpp0kLq+7IJBtIJBtIJBtIJBtIJBtIJBtIJBtIJBtIJBtIJBtIJBtIJBtALsN7y5uJ+6vuwCbAM/ajDiz7ZT15dlgOc1IM9S15V1+POp5Ztq7Kaux3EcZ5JPfgHNTOp1Sby6QAAAAABJRU5ErkJggg==',
  },
  address: { type: Object, default: { line1: '', line2: '' } },
  gender: { type: String, default: 'Not Selected' },
  dob: { type: String, default: 'Not Selected' },
  phone: { type: String, default: '000000000' },
});

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;

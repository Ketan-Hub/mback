const mongoose = require("mongoose");
const nonCriminalSChema = mongoose.Schema(
  {
    application_type:{type:String},
    status:{type:String},
    createdBy:{type:String},
    createdByName:{type:String},
    Data:{
    statusfname: { type: String},
    fullName_English: { type: String },
    fullName_Marathi: { type: String },
    fatherName_english: { type: String },
    fatherName_marathi: { type: String },
    BirthDate: { type: String },
    age: { type: Number },
    Gender: { type: String },
    phoneNUm: { type: Number },
    email: { type: String },
    UDI_NO: { type: String },
    formPrice :{type: Number},
    Applicant_address: { type: String },
    Applicant_street: { type: String },
    Applicant_Locality: { type: String },
    Applicant_Building: { type: String },
    Applicant_landmark: { type: String },
    Applicant_district: { type: String },
    Applicant_taluka: { type: String },
    Applicant_village: { type: String },
    Applicant_pincode: { type: Number },
    Applicant_CurrentOccupation: { type: String },
    relationOfBanificiaryWithApplicant: { type: String },
    benificiary_Cast: { type: String },
    benificiary_Catagary: { type: String },
    brnificiary_Validity_Duration: { type: String },
    migration_MH_From_Another_State: { type: String },
    Migrant_Distict: { type: String },
    Migrant_Taluka: { type: String },
    Migrant_village: { type: String },
    isAppliedForCastCertificate: { type: String},
    is_Certificate_Given: { type: String },
    previos_CastCerNum: { type: String },
    previos_CastCerPlaceIssue: { type: String },
    previos_CastCerIssuedDate: { type: String },
    propowner:{ type: String },
    txtLocation:{ type: String },
    txtarea:{ type: String },
    ddlareaunits:{ type: String },
    checkbox:{ type: String },
    txtirriarea:{ type: String },
    ddlunits:{ type: String },
    txtpercentage:{ type: String },
    txtformula:{ type: String },
    txtceilingactform:{ type: String },
    ddlcultitype:{ type: String },
    txtcultilocation:{ type: String },
    txtcultiarea:{ type: String },
    ddlcultiunit:{ type: String },
    txtproploc:{ type: String },
    txtpropdetails:{ type: String },
    txtpropuse:{ type: String },
    CPH_radiobtnpayee:{ type: String },
    radiobtnwealthtax:{ type: String },
    ddlmothersal:{ type: String },
    txtmothername:{ type: String },
    txtmothername_LL:{ type: String },
    ddlspousesal:{ type: String },
    txtSpouseName:{ type: String },
    txtspousename_LL:{ type: String },
    ddlfam_dist:{ type: String },
    ddlfam_taluka:{ type: String },
    ddlfam_Vill:{ type: String },
    txtfam_pincode:{ type: String },
    txtbenefreason:{ type: String },
    ctl00$CPH$Affd:{ type: String }
    },
    NonCreamyLayerincomeSource:{type:Array},
    occupation_income:{type:Array},
    note:{type:String},
    isNew:{type:Boolean,default:true},
    rejNote:{type:String},
    subNote:{type:String},
    compNote:{type:String},

    //uploads
    acknowledgmentDocument:{type:String},
    finalDocument:{type:String},
    reshanCard:{type:String},
    adharCard:{type:String},
    lightBill:{type:String},
    schoolLeaveCertificate:{type:String},
    photo:{type:String},
    incomeCertficate3year:{type:String},
    castCertificate:{type:String},
    taxRecipt:{type:String}  
  },
  { timestamps: true }
);
module.exports = mongoose.model("nonCriminal", nonCriminalSChema);
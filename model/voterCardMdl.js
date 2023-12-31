const mongoose = require("mongoose");
const Voter_Card_Fees = mongoose.Schema(
  {
    application_type:{type:String},
    status:{type:String},
    createdBy:{type:String},
    createdByName:{type:String},
    assembly_Parliamentary_Constituency: { type: String, required: true },
    request_name_electoral_roll_Constituency: { type: String, required: true },
    name: { type: String, required: true },
    Surname: { type: String },
    gender: { type: String, required: true },
    date_of_Birth: { type: String, required: true },
    birth_Town_Village_Office: { type: String },
    birth_District: { type: String, required: true },
    birth_State_Union_Territory: { type: String, required: true },
    relation: { type: String, required: true },
    currentAddress_houseNumber: { type: Number, required: true },
    currentAddress_streetArea_Locality: { type: String, required: true },
    currentAddress_townVillage_Office: { type: String, required: true },
    currentAddress_postOffice: { type: String, required: true },
    currentAddress_district: { type: String, required: true },
    currentAddress_stateUnion_Territory: { type: String, required: true },
    currentAddress_pincodeZip_code: { type: Number, required: true },
    formPrice :{type: Number},
    retailerName:{type:String},
    currentAddress_ordinarily_resident_address_since: {
      type: String,
      required: true,
    },
    currentAddress_permanentAddress_currentAddress: {
      type: String,
      required: true,
    },
    permanent_address: { type: String, required: true },
    permanentAddress_House_No: { type: Number, required: true },
    permanentAddress_streetArea_Locality: { type: String, required: true },
    permanentAddress_townVillage_Office: { type: String, required: true },
    permanentAddress_postOffice: { type: String, required: true },
    permanentAddress_district: { type: String, required: true },
    permanentAddress_stateUnion_territory: { type: String, required: true },
    permanentAddress_pincodeZip_code: { type: Number, required: true },
    permanentAddress_telephoneMobile_Number: { type: Number, required: true },
    email: { type: String, required: true },
    EPIC_No: { type: Number, required: true },
    disability: { type: String, required: true },
    previous_Constituency: { type: String, required: true },
    previousConstituency_state: { type: String, required: true },
    note:{type:String},
    //uploads
    acknowledgmentDocument:{type:String},
    finalDocument:{type:String},
    addressProof: { type: String, required: true },
    addressProof_Doc: { type: String },
    ageProof: { type: String, required: true },
    ageProof_DOc: { type: String, required: true },
    PassportSize_photo: { type: String, required: true },
    age_declaration_form: { type: String, required: true },
    isNew:{type:Boolean,default:true},
    rejNote:{type:String},
    subNote:{type:String},
    compNote:{type:String},

  },
  { timestamps: true }
);

module.exports = mongoose.model("voterCard", Voter_Card_Fees);

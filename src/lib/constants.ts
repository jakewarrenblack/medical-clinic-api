import * as HTTPStatusPhrases from "stoker/http-status-phrases";
import { createMessageObjectSchema } from "stoker/openapi/schemas";

// So any endpoint which needs to respond with 404 not found can reuse this validator
export const notFoundSchema = createMessageObjectSchema(
  HTTPStatusPhrases.NOT_FOUND,
);

export const unauthorizedSchema = createMessageObjectSchema(
  HTTPStatusPhrases.UNAUTHORIZED,
);

// Using these to extend fakerJS
// Source: https://www.health.harvard.edu/health-a-to-z
export const commonDiseasesWithMedications = [
  { condition: "Hypertension", medication: "Lisinopril" },
  { condition: "Diabetes Mellitus Type 2", medication: "Metformin" },
  { condition: "Asthma", medication: "Albuterol" },
  { condition: "Chronic Obstructive Pulmonary Disease (COPD)", medication: "Tiotropium" },
  { condition: "Depression", medication: "Sertraline" },
  { condition: "Anxiety Disorder", medication: "Escitalopram" },
  { condition: "Osteoarthritis", medication: "Ibuprofen" },
  { condition: "Rheumatoid Arthritis", medication: "Methotrexate" },
  { condition: "Gastroesophageal Reflux Disease (GERD)", medication: "Omeprazole" },
  { condition: "Allergic Rhinitis", medication: "Loratadine" },
  { condition: "Acid Reflux", medication: "Ranitidine" },
  { condition: "Insomnia", medication: "Zolpidem" },
  { condition: "Hyperlipidemia", medication: "Atorvastatin" },
  { condition: "Hypothyroidism", medication: "Levothyroxine" },
  { condition: "Hypoglycemia", medication: "Glucose tablets" },
  { condition: "Urinary Tract Infection (UTI)", medication: "Nitrofurantoin" },
  { condition: "Bacterial Pneumonia", medication: "Amoxicillin" },
  { condition: "Chronic Kidney Disease", medication: "Lisinopril" },
  { condition: "Migraine", medication: "Sumatriptan" },
  { condition: "Psoriasis", medication: "Topical corticosteroids" },
  { condition: "Eczema", medication: "Hydrocortisone cream" },
  { condition: "Celiac Disease", medication: "Gluten-free diet" },
  { condition: "Irritable Bowel Syndrome (IBS)", medication: "Loperamide" },
  { condition: "Gout", medication: "Allopurinol" },
  { condition: "Osteoporosis", medication: "Alendronate" },
  { condition: "Acne", medication: "Isotretinoin" },
  { condition: "Chronic Sinusitis", medication: "Nasal corticosteroids" },
  { condition: "Influenza", medication: "Oseltamivir" },
  { condition: "Chickenpox", medication: "Acyclovir" },
  { condition: "Tuberculosis", medication: "Isoniazid" },
  { condition: "Hepatitis C", medication: "Sofosbuvir" },
  { condition: "Bipolar Disorder", medication: "Lithium" },
  { condition: "Schizophrenia", medication: "Risperidone" },
  { condition: "Parkinson's Disease", medication: "Levodopa" },
  { condition: "Multiple Sclerosis", medication: "Interferon beta" },
  { condition: "Alzheimer's Disease", medication: "Donepezil" },
  { condition: "Anemia", medication: "Iron supplements" },
  { condition: "Hemophilia", medication: "Factor replacement therapy" },
  { condition: "Sickle Cell Disease", medication: "Hydroxyurea" },
  { condition: "Cystic Fibrosis", medication: "Dornase alfa" },
  { condition: "Chronic Fatigue Syndrome", medication: "Supportive care" },
  { condition: "Fibromyalgia", medication: "Pregabalin" },
  { condition: "Post-Traumatic Stress Disorder (PTSD)", medication: "Sertraline" },
  { condition: "Attention Deficit Hyperactivity Disorder (ADHD)", medication: "Methylphenidate" },
  { condition: "Obsessive-Compulsive Disorder (OCD)", medication: "Fluoxetine" },
  { condition: "Chronic Pain", medication: "Gabapentin" },
  { condition: "Tension Headaches", medication: "Amitriptyline" },
  { condition: "Bacterial Vaginosis", medication: "Metronidazole" },
  { condition: "Candidiasis (Yeast Infection)", medication: "Fluconazole" },
  { condition: "Acute Bronchitis", medication: "Bronchodilators" },
  { condition: "Pneumonia", medication: "Azithromycin" },
  { condition: "Chronic Liver Disease", medication: "Lactulose" },
  { condition: "Gallstones", medication: "Ursodeoxycholic acid" },
  { condition: "Diverticulitis", medication: "Ciprofloxacin" },
  { condition: "Constipation", medication: "Polyethylene glycol" },
  { condition: "Diarrhea", medication: "Loperamide" },
  { condition: "Nausea and Vomiting", medication: "Ondansetron" },
  { condition: "Motion Sickness", medication: "Meclizine" },
  { condition: "Acid Reflux", medication: "Pantoprazole" },
  { condition: "Chronic Fatigue Syndrome", medication: "Modafinil" },
  { condition: "Sleep Apnea", medication: "Continuous Positive Airway Pressure (CPAP)" },
  { condition: "Restless Legs Syndrome", medication: "Ropinirole" },
  { condition: "Hyperthyroidism", medication: "Methimazole" },
  { condition: "Hypoparathyroidism", medication: "Calcium supplements" },
  { condition: "Chronic Sinusitis", medication: "Saline nasal spray" },
  { condition: "Tinnitus", medication: "Antidepressants" },
  { condition: "Hearing Loss", medication: "Hearing aids" },
  { condition: "Skin Infections", medication: "Cephalexin" },
  { condition: "Psoriatic Arthritis", medication: "Adalimumab" },
  { condition: "Systemic Lupus Erythematosus", medication: "Hydroxychloroquine" },
  { condition: "Scleroderma", medication: "Methotrexate" },
  { condition: "Chronic Urticaria", medication: "Antihistamines" },
  { condition: "Eosinophilic Esophagitis", medication: "Topical steroids" },
  { condition: "Anaphylaxis", medication: "Epinephrine" },
  { condition: "Acute Kidney Injury", medication: "Supportive care" },
  { condition: "Chronic Kidney Disease", medication: "Erythropoietin" },
  { condition: "Urinary Incontinence", medication: "Oxybutynin" },
  { condition: "Menopause Symptoms", medication: "Hormone Replacement Therapy" },
  { condition: "Hot Flashes", medication: "Gabapentin" },
  { condition: "Endometriosis", medication: "GnRH agonists" },
  { condition: "Premenstrual Syndrome (PMS)", medication: "SSRIs" },
  { condition: "Chronic Migraines", medication: "Botulinum toxin" },
  { condition: "Cluster Headaches", medication: "Verapamil" },
  { condition: "Peripheral Neuropathy", medication: "Gabapentin" },
  { condition: "Carpal Tunnel Syndrome", medication: "Wrist splints" },
  { condition: "Tendonitis", medication: "NSAIDs" },
  { condition: "Tennis Elbow", medication: "Corticosteroid injections" },
  { condition: "Plantar Fasciitis", medication: "Orthotics" },
  { condition: "Achilles Tendonitis", medication: "Physical therapy" },
  { condition: "Osteomyelitis", medication: "Antibiotics" },
  { condition: "Septic Arthritis", medication: "Antibiotics" },
  { condition: "Chronic Fatigue Syndrome", medication: "Cognitive behavioral therapy" },
  { condition: "Fibromyalgia", medication: "Duloxetine" },
  { condition: "Common Cold", medication: "Decongestants" },
  { condition: "Seasonal Allergies", medication: "Cetirizine" },
  { condition: "Mild Acne", medication: "Benzoyl Peroxide" },
  { condition: "Dry Skin", medication: "Moisturizers" },
  { condition: "Sunburn", medication: "Aloe Vera" },
  { condition: "Minor Burns", medication: "Silver sulfadiazine" },
  { condition: "Head Lice", medication: "Permethrin" },
  { condition: "Dandruff", medication: "Ketoconazole shampoo" },
  { condition: "Nasal Congestion", medication: "Saline nasal spray" },
  { condition: "Sore Throat", medication: "Throat lozenges" },
  { condition: "Minor Cuts and Scrapes", medication: "Antiseptic ointment" },
  { condition: "Constipation", medication: "Fiber supplements" },
  { condition: "Diarrhea", medication: "Probiotics" },
  { condition: "Heartburn", medication: "Antacids" },
  { condition: "Indigestion", medication: "Simethicone" },
  { condition: "Motion Sickness", medication: "Dimenhydrinate" },
  { condition: "Cough", medication: "Dextromethorphan" },
  { condition: "Fatigue", medication: "Vitamin B12" },
  { condition: "Nausea", medication: "Ginger" },
  { condition: "Minor Headaches", medication: "Acetaminophen" },
  { condition: "Tension Headaches", medication: "Ibuprofen" },
  { condition: "Muscle Strain", medication: "Topical analgesics" },
  { condition: "Sprains", medication: "RICE (Rest, Ice, Compression, Elevation)" },
  { condition: "Chapped Lips", medication: "Lip balm" },
  { condition: "Warts", medication: "Salicylic acid" },
  { condition: "Fungal Nail Infection", medication: "Topical antifungals" },
  { condition: "Minor Allergic Reactions", medication: "Hydrocortisone cream" },
  { condition: "Insect Bites", medication: "Calamine lotion" },
  { condition: "Minor Skin Irritations", medication: "Aloe Vera gel" },
  { condition: "Canker Sores", medication: "Topical anesthetics" },
  { condition: "Cold Sores", medication: "Acyclovir cream" },
  { condition: "Earwax Buildup", medication: "Ear drops" },
  { condition: "Dry Eyes", medication: "Artificial tears" },
  { condition: "Minor Eye Irritation", medication: "Cool compresses" },
  { condition: "Hangover", medication: "Hydration and rest" },
  { condition: "Fatigue", medication: "Caffeine" },
  { condition: "Mild Anxiety", medication: "Chamomile tea" },
  { condition: "Mild Depression", medication: "St. John's Wort" },
  { condition: "Insomnia", medication: "Melatonin" },
  { condition: "Nasal Allergies", medication: "Nasal corticosteroids" },
  { condition: "Pollen Allergies", medication: "Montelukast" },
  { condition: "Minor Back Pain", medication: "Heat therapy" },
  { condition: "Minor Joint Pain", medication: "Topical NSAIDs" },
  { condition: "Minor Cough", medication: "Honey" },
  { condition: "Minor Fever", medication: "Acetaminophen" },
  { condition: "Minor Skin Rashes", medication: "Antihistamine cream" },
  { condition: "Minor Gastrointestinal Upset", medication: "Probiotics" },
  { condition: "Minor Fatigue", medication: "Iron supplements" },
  { condition: "Minor Stress", medication: "Relaxation techniques" },
  { condition: "Minor Sleep Disturbances", medication: "Herbal teas" },
  { condition: "Minor Digestive Issues", medication: "Digestive enzymes" },
  { condition: "Minor Cramps", medication: "Heat pads" },
  { condition: "Minor Skin Dryness", medication: "Moisturizing lotion" },
  { condition: "Minor Hair Loss", medication: "Minoxidil" },
];

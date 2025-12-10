<script lang="ts" setup>
import { type Patient } from '@/scripts/patient';
import useHospitalStore from "@/store/hospital";
import useQRcodeStore from '@/store/module/publicaccess/qrcode';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const hospitalStore = useHospitalStore();
const patientQRCodeStore = useQRcodeStore();

const { hospitalProfile } = storeToRefs(hospitalStore);
const { qrCodeData } = storeToRefs(patientQRCodeStore);
const { retrieveHospitalProfile } = hospitalStore;
const { generateQRCode } = patientQRCodeStore;
const isLoading = ref(true);


const props = defineProps<{
    patientInfo: Patient;

}>();



onMounted(async () => {
    await retrieveHospitalProfile();
    isLoading.value = false;
    await generateQRCode(props.patientInfo.generated_patient_id);
});

</script>
<template>
    <div class="card">
        <!-- Hospital Header -->
        <div class="hospital-header">
            <div class="hospital-name">
                <div class="bsh">{{hospitalProfile?.hospital_name.split(" ").map(word => word[0]).join("").toUpperCase() }}</div>
                <div class="hospital-title">
                    {{ hospitalProfile?.hospital_name }}<br>
                    <span style="font-size: 16px;">Increase you are special</span>
                </div>
            </div>
            <div class="tagline">Specialized Hospital - 24/7 Emergency Service</div>
        </div>

        <!-- Card Content -->
        <div class="card-content">
            <!-- Left Side - QR Code -->
            <div class="left-side">
                <div class="qr-code-box">

                    <div class="qr-code" v-if="props.patientInfo.generated_patient_id && qrCodeData">
                        <img :src="qrCodeData" alt="Patient QR Code" width="200">
                    </div>
                    <div class="qr-code" v-else>
                        <div class="qr-pattern"></div>
                        <div class="qr-center">{{hospitalProfile?.hospital_name.split(" ").map(word => word[0]).join("").toUpperCase() }}</div>
                    </div>
                    <div class="scan-text">SCAN FOR APPOINTMENT</div>
                </div>
                <p class="qr-note">
                    Scan this QR code to book your next appointment online or access your medical records.
                </p>
                <!-- <button class="appointment-btn">Book Appointment Now</button> -->
            </div>

            <!-- Right Side - Patient Info -->
            <div class="right-side">
                <div class="card-title">Patient Identification Card</div>

                <div class="hn-number">Patient Id: {{ patientInfo.generated_patient_id }}</div>

                <ul class="info-list">
                    <li class="info-item">
                        <div class="info-label">Date:</div>
                        <div class="info-value">{{ new Date(patientInfo.created_at).toLocaleDateString() }}</div>
                    </li>
                    <li class="info-item">
                        <div class="info-label">Name:</div>
                        <div class="info-value capitalize">{{ patientInfo.patient_name }}</div>
                    </li>
                    <li class="info-item">
                        <div class="info-label">Gender:</div>
                        <div class="info-value capitalize">{{ patientInfo.sex }}</div>
                    </li>
                    <li class="info-item">
                        <div class="info-label">Date of Birth:</div>
                        <div class="info-value">{{ patientInfo.date_of_birth }}</div>
                    </li>
                    <li class="info-item">
                        <div class="info-label">Age:</div>
                        <div class="info-value">{{ patientInfo.age }}</div>
                    </li>
                    <li class="info-item">
                        <div class="info-label">Card Type:</div>
                        <div class="info-value">General</div>
                    </li>
                </ul>

                <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 5px;">
                    <div style="font-size: 13px; color: #666; margin-bottom: 5px;">
                        <strong>Important:</strong> Always bring this card when visiting the hospital.
                    </div>
                    <div style="font-size: 12px; color: #777;">
                        Your Patient Id is your unique ID for all hospital services.
                    </div>
                </div>
            </div>
        </div>

        <!-- Hospital Footer -->
        <div class="hospital-footer" v-if="hospitalProfile">
            <div class="contact-info">
                <div class="contact-item">
                    <div class="contact-label">Hotline</div>
                    <div>10633</div>
                </div>
                <div class="contact-item">
                    <div class="contact-label">Phone Number</div>
                    <div>09666700100</div>
                </div>
                <div class="contact-item">
                    <div class="contact-label">Customer Care</div>
                    <div>01313777600</div>
                </div>
                <div class="contact-item">
                    <div class="contact-label">24hrs Emergency</div>
                    <div>{{ hospitalProfile.phone_number }}</div>
                </div>
            </div>

            <div class="address">
                <strong>{{ hospitalProfile.hospital_name }} Ltd,</strong><br>
                {{ hospitalProfile.address }}, {{ hospitalProfile.city }}, {{ hospitalProfile.state }}, {{
                    hospitalProfile.postal_code }}.<br>
                Email: {{ hospitalProfile.email }} | Web: {{ hospitalProfile.website }}
            </div>

            <div class="note">
                This is your unique identification number for Bangladesh Specialized Hospital Ltd.
                Please bring this card or refer the provided HN number for future correspondence with us.
            </div>
        </div>
    </div>



</template>

<style scoped>
.card {
    background: white;
    width: 100%;
    max-width: 900px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

/* Hospital Header */
.hospital-header {
    background: #2a5caa;
    color: white;
    padding: 20px 30px;
}

.hospital-name {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.bsh {
    font-size: 36px;
    font-weight: bold;
    margin-right: 15px;
}

.hospital-title {
    font-size: 20px;
    line-height: 1.2;
}

.tagline {
    font-size: 14px;
    margin-top: 5px;
    color: #e0e0e0;
}

/* Card Content */
.card-content {
    display: flex;
    padding: 0;
}

/* Left Side - QR Code */
.left-side {
    background: #f8f9fa;
    padding: 30px;
    width: 40%;
    border-right: 2px dashed #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.qr-code-box {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    margin-bottom: 25px;
    border: 1px solid #eee;
}

.qr-code {
    width: 200px;
    height: 200px;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    position: relative;
}

.qr-pattern {
    position: absolute;
    width: 100%;
    height: 100%;
    background:
        linear-gradient(90deg, transparent 45%, #2a5caa 45%, #2a5caa 55%, transparent 55%),
        linear-gradient(transparent 45%, #2a5caa 45%, #2a5caa 55%, transparent 55%);
    background-size: 20px 20px;
}

.qr-center {
    background: white;
    width: 60px;
    height: 60px;
    z-index: 1;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #2a5caa;
    font-weight: bold;
}

.scan-text {
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top: 10px;
}

.qr-note {
    font-size: 13px;
    color: #666;
    text-align: center;
    margin-top: 15px;
    max-width: 250px;
    line-height: 1.4;
}

/* Right Side - Patient Info */
.right-side {
    padding: 30px;
    width: 60%;
}

.card-title {
    color: #2a5caa;
    font-size: 18px;
    margin-bottom: 25px;
    padding-bottom: 10px;
    border-bottom: 2px solid #eee;
}

.info-list {
    list-style: none;
    margin-bottom: 30px;
}

.info-item {
    margin-bottom: 15px;
    display: flex;
}

.info-label {
    color: #555;
    width: 120px;
    font-weight: bold;
}

.info-value {
    color: #222;
    font-weight: bold;
}

.hn-number {
    background: #eef5ff;
    padding: 10px 15px;
    border-radius: 5px;
    border-left: 4px solid #2a5caa;
    font-size: 18px;
    font-weight: bold;
    color: #2a5caa;
    margin-bottom: 25px;
}

/* Hospital Footer */
.hospital-footer {
    background: #f0f5ff;
    padding: 25px 30px;
    border-top: 2px solid #e0e8ff;
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
}

.contact-item {
    font-size: 14px;
}

.contact-label {
    color: #2a5caa;
    font-weight: bold;
    margin-bottom: 5px;
}

.address {
    font-size: 14px;
    color: #444;
    line-height: 1.5;
    margin-bottom: 15px;
}

.note {
    font-size: 13px;
    color: #666;
    line-height: 1.4;
    padding-top: 15px;
    border-top: 1px solid #ddd;
}

/* Button */
.appointment-btn {
    background: #2a5caa;
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    display: block;
    margin: 20px auto 0;
    transition: background 0.3s;
}

.appointment-btn:hover {
    background: #1d4a8a;
}

/* Responsive */
@media (max-width: 768px) {
    .card-content {
        flex-direction: column;
    }

    .left-side,
    .right-side {
        width: 100%;
    }

    .left-side {
        border-right: none;
        border-bottom: 2px dashed #ddd;
    }

    .contact-info {
        grid-template-columns: 1fr;
    }
}
</style>

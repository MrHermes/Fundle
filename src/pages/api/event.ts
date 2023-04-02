import { API_BaseUrl } from "@/constant/env";
import axios from "axios";

export type DonationListType = {
  asal_pekerjaan: string,
  deskripsi_event: string,
  expired_donasi: string,  
  foto_event: string,
  id: string,
  is_done: number,
  is_expired: boolean,  
  is_target_full: boolean,
  jenis_event: string,
  judul_event: string,
  jumlah_donasi: number,
  like_count: number,
  lokasi_tujuan: string,
  max_donasi: number,
  nama_belakang_pembuat: string,
  nama_belakang_penerima: string,
  nama_depan_pembuat: string,
  nama_depan_penerima: string,
  nomor_ktp: string,
  nomor_telepon_pembuat: string,
  pekerjaan: string,
  rekening_event: string,
  time_left: string,
  tujuan_galang_dana: string,
  user_id: string
}

export type DataType = {
  id: string,
  rekening_event: string,
  judul_event: string,
  deskripsi_event: string,
  jenis_event: string,
  foto_event: string,
  max_donasi: number,
  jumlah_donasi: number,
  like_count: number,
  expired_donasi: string,
  total_berhasil: number,
  is_target_full: boolean,
  is_expired: boolean,
  nama_depan_pembuat: string,
  nama_belakang_pembuat: string,
  nomor_ktp: string,
  nomor_telepon_pembuat: string,
  pekerjaan: string,
  asal_pekerjaan: string,
  nama_depan_penerima: string,
  nama_belakang_penerima: string,
  tujuan_galang_dana: string,
  lokasi_tujuan: string,
  user_id: string
}

export type EventData= {
  status: boolean,
  message: string,
  error: string,
  data: Array<{
    id: string,
    rekening_event: string,
    judul_event: string,
    deskripsi_event: string,
    jenis_event: string,
    foto_event: string,
    max_donasi: number,
    jumlah_donasi: number,
    like_count: number,
    expired_donasi: string,
    total_berhasil: number,
    is_target_full: boolean,
    is_expired: boolean,
    nama_depan_pembuat: string,
    nama_belakang_pembuat: string,
    nomor_ktp: string,
    nomor_telepon_pembuat: string,
    pekerjaan: string,
    asal_pekerjaan: string,
    nama_depan_penerima: string,
    nama_belakang_penerima: string,
    tujuan_galang_dana: string,
    lokasi_tujuan: string,
    user_id: string
  }>
}

export const getEventData = async ( id?: string ) => {
  try {
    const response = await axios.get(`${API_BaseUrl}api/event/get/${id}`);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("ERROR HERE");
    console.log(error);
  }
};

export const get3Event = async ( ) => {
  try {
    const response = await axios.get(`${API_BaseUrl}api/event/get3event`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("ERROR HERE");
    console.log(error);
  }
};
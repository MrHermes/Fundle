import axios from 'axios';

import { API_BaseUrl } from '@/constant/env';

export type HistoryType = {
  id: string;
  deskripsi_event: string;
  foto_event: boolean;
  judul_event: string;
  status: boolean;
  message: string;
  error: string;
  data: Array<{
    id: string;
    rekening_event: string;
    judul_event: string;
    deskripsi_event: string;
    jenis_event: string;
    foto_event: string;
    max_donasi: number;
    jumlah_donasi: number;
    like_count: number;
    expired_donasi: string;
    is_done: number;
    is_target_full: boolean;
    is_expired: boolean;
    nama_depan_pembuat: string;
    nama_belakang_pembuat: string;
    nomor_ktp: string;
    nomor_telepon_pembuat: string;
    pekerjaan: string;
    asal_pekerjaan: string;
    nama_depan_penerima: string;
    nama_belakang_penerima: string;
    tujuan_galang_dana: string;
    lokasi_tujuan: string;
    user_id: string;
    history_penarikan: string;
  }>;
};

export const getEventData = async (id?: string) => {
  try {
    const response = await axios.get(`${API_BaseUrl}api/event/get/${id}`);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Error');
  }
};

export const getEvent = async () => {
  try {
    const response = await axios.get(`${API_BaseUrl}api/event/getevent`);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Error');
  }
};

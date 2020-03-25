import {Image} from '../../../shared/models';

export interface PhotographModel {
  id: number;
  image: Image;
  handpiece: HandpieceModel;
  orig_height: number;
  orig_width: number;
  audio_file: string | null;
  description: string;
  online_status: boolean;
  created_at: Date;
  last_modified: Date;
}

export interface HandpieceModel {
  id: number;
  name: string;
  mineral_type: {
    id: number,
    minerals: string,
    trivial_name: string,
    variety: string,
  }[];
  finding_place: string;
  current_location: string;
  old_inventory_number: string;
  created_at: Date;
  last_modified: Date;
}
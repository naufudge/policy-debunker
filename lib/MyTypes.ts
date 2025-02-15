export interface OpenStatsData {
  tourist_arrivals: TouristArrival[];
  registered_bed_capacity: RegisteredBedCapacity[];
  beds_in_operation: BedsInOperation[];
  tourist_bed_nights: TouristBedNight[];
  bed_utilization_rate: BedUtilizationRate[];
  tourism_gdp_contribution: TourismGdpContribution[];
  employment_by_nationality: EmploymentByNationality[];
  employment_by_gender: EmploymentByGender[];
  employment_by_bed_capacity: EmploymentByBedCapacity[];
  employment_by_area: EmploymentByArea[];
}

export interface TouristArrival {
  year: number;
  arrivals: number;
}

export interface RegisteredBedCapacity {
  year: number;
  beds: number;
}

export interface BedsInOperation {
  year: number;
  beds: number;
}

export interface TouristBedNight {
  year: number;
  bed_nights: number;
}

export interface BedUtilizationRate {
  year: number;
  rate: number;
}

export interface TourismGdpContribution {
  year: number;
  contribution: number;
}

export interface EmploymentByNationality {
  category: string;
  percentage: number;
}

export interface EmploymentByGender {
  category: string;
  percentage: number;
}

export interface EmploymentByBedCapacity {
  category: string;
  employees: number;
}

export interface EmploymentByArea {
  category: string;
  percentage: number;
}

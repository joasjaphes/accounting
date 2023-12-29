import { Injectable } from '@nestjs/common';
import { CompanyRepository } from './company.repository';
import { Company } from './company.entity';
import { CompanyDTO } from './company.dto';

@Injectable()
export class CompanyService {
  constructor(private repository: CompanyRepository) {}

  async createCompany(company: CompanyDTO): Promise<CompanyDTO> {
    try {
      const companyPayload: Company = this.getCompanyPayloadFromDTO(company);
      const createdCompany: Company = await this.repository.createCompany(
        companyPayload
      );
      return this.getCompanyDTOFromPayload(createdCompany);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async updateCompany(company: CompanyDTO): Promise<CompanyDTO> {
    try {
      const companyPayload: Company = this.getCompanyPayloadFromDTO(company);
      const updatedCompany: Company = await this.repository.updateCompany(
        companyPayload
      );
      return this.getCompanyDTOFromPayload(updatedCompany);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async getCompanyByUId(uid: string): Promise<CompanyDTO> {
    try {
      const company: Company = await this.repository.getCompanyByUId(uid);
      return this.getCompanyDTOFromPayload(company);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async getAllCompanies(): Promise<CompanyDTO[]> {
    try {
      const companies: Company[] = await this.repository.getAllCompanies();
      return companies.map((company) => this.getCompanyDTOFromPayload(company));
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  getCompanyPayloadFromDTO(company: CompanyDTO): Company {
    const companyPayload: Company = new Company();
    companyPayload.name = company.name;
    companyPayload.description = company.description;
    companyPayload.uid = company.id;
    return companyPayload;
  }

  getCompanyDTOFromPayload(company: Company): CompanyDTO {
    const companyDTO: CompanyDTO = {
      id: company.uid,
      name: company.name,
      description: company.description,
    };
    return companyDTO;
  }
}

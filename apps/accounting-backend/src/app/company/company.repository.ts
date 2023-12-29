import { Repository } from 'typeorm';
import { Company } from './company.entity';

export class CompanyRepository extends Repository<Company> {
  async createCompany(company: Company): Promise<Company> {
    return await this.save(company);
  }

  async updateCompany(company: Company): Promise<Company> {
    await this.update(company.uid, company);
    return company;
  }
  async getCompanyByUId(uid: string): Promise<Company> {
    return await this.findOne({ where: { uid } });
  }
  async getAllCompanies(): Promise<Company[]> {
    return await this.find();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JournalEntry } from './journal-entry.entity';
import { Repository } from 'typeorm';
import { AccountService } from '../account/account.service';
import { JournalEntryDTO } from './journal-entry.dto';

@Injectable()
export class JournalEntryService {
  constructor(
    @InjectRepository(JournalEntry)
    private repository: Repository<JournalEntry>,
    private accountService: AccountService
  ) {}

  async createJournalEntry(journal: JournalEntryDTO) {
    try {
      const journalPayload = await this.getJournalPayloadFromDTO(journal);
      return await journalPayload.save();
    } catch (e) {
      console.error('Failed to save journal entry', e);
      throw e;
    }
  }

  async getJournalPayloadFromDTO(journal: JournalEntryDTO) {
    const journalPayload = this.repository.create();
    journalPayload.uid = journal.id;
    journalPayload.date = journal.date;
    return journalPayload;
  }

  async getJournalEntryByUid(uid: string) {
    return await this.repository.findOne({ where: { uid } });
  }
}

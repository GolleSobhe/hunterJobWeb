import { CandidatModule } from './candidat.module';

describe('CandidatModule', () => {
  let candidatModule: CandidatModule;

  beforeEach(() => {
    candidatModule = new CandidatModule();
  });

  it('should create an instance', () => {
    expect(candidatModule).toBeTruthy();
  });
});

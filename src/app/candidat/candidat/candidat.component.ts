import { Candidat } from './../candidat';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  candidat: Candidat;
  loading: boolean = true;
  isEdit: Boolean = false;
  pdfSrc: String = null;
  candidatForm: FormGroup;
  candidatFormCV: FormGroup;
  fileCV: File;
  constructor(private _formBuilder: FormBuilder,
        private router: ActivatedRoute,
        private candidatService: CandidatService) { }

  ngOnInit() {
    this.candidatForm = this._formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(7)]],
      telephone: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(8)]],
      titreProfil: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      anneesExperiences: ['', [Validators.required]],
      anneesEtudes: ['', [Validators.required]],
      salaire: ['', [Validators.required]],
      cdi: [false, Validators.required],
      cdd: [false, Validators.required],
      freelance: [false, Validators.required],
      professionnalisation: [false, Validators.required],
      apprentissage: [false, Validators.required],
      interim: [false, Validators.required],
      stage: [false, Validators.required],
      relocalisation: [false, Validators.required],       
    });
    this.candidatFormCV = this._formBuilder.group({
      titreProfil: ['', [Validators.required]],
      file: ['', [Validators.required]],
    });
    this.initCandidat();
  }

  private initCandidat(): void {
    this.candidatForm.disable();
    this.candidatFormCV.disable();
    this.router.params.subscribe(param => {
      this.candidatService.getCandidatById(param.id)
      .subscribe(candidat => {
        this.candidat = candidat;   
        this.pdfSrc = this.candidatService.getFileCv(this.candidat.id);    
        this.loading = false;
        if(this.isActive(this.candidat)){
          this.candidatForm.enable();
          this.candidatFormCV.enable();
        }
      });
    });
  }

  private isActive(candidat: Candidat): boolean {
    return (candidat.adresse == null) || (candidat.anneesEtudes == null)
            || (candidat.anneesExperiences == null) || (candidat.salaire == null)
            || (candidat.telephone == null) || (candidat.titreProfil == null)
            || (this.pdfSrc == null);
  }

  onFileSelected(event) {
    const $pdf: any = document.querySelector('#id_load_file_candidat');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($pdf.files[0]);
    }
    if(event.target.files && event.target.files.length > 0) {
      this.fileCV = event.target.files[0];
    }
  }

  enregister(): void {
    this.isEdit = !this.isEdit;
    this.activeFormGroup();
     
    if(!this.isEdit){
      this.loading = true;
     // if(this.candidatForm.valid && this.candidatFormCV.valid){    
        const file: FormData = new FormData();
        file.append(`file`, this.fileCV);
        this.candidatService.update(this.candidat).subscribe(
          candidat => {
            this.candidatService.sendFileCv(candidat.id, file).subscribe(
              fileStored => {
                console.log(candidat);
                this.loading = false;
                if(this.isActive(this.candidat)){
                  this.candidatForm.enable();
                  this.candidatFormCV.enable();
                }
              },
              error => {
                console.log(error);
              }
            );
          },
          error => {
            console.log(error);
          }
        );
      //}        
    }
    
  }

  private activeFormGroup(): void {
    if(this.candidatForm.enabled){
      this.candidatForm.disable();
    }else{
      this.candidatForm.enable();
    }
    if(this.candidatFormCV.enabled){
      this.candidatFormCV.disable();
    }else{
      this.candidatFormCV.enable();
    }
  }

}

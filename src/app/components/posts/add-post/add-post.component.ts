import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  categories: Category[];
  addForm: FormGroup;
  submitted = false;

  constructor(
    private data: DataService,
    private categoryService: CategoryService,
    private postService: PostService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.data.changeTitle('Add Post');
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });

    this.addForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      text: ['', Validators.required],
      categories: [[], Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.addForm.value);

    if (this.addForm.valid) {
      this.postService.addPost(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['/list-posts']);
      });
    }
  }

  get f() { return this.addForm.controls; }

}

import { BrowserModule, Title } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material.module";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { VerifyComponent } from "./components/register/verify/verify.component";
import { CookbooksComponent } from "./components/cookbooks/cookbooks.component";
import { CookbookComponent } from "./components/cookbooks/cookbook/cookbook.component";

import { EditCookbookDialogComponent } from "./components/cookbooks/cookbook/edit-cookbook-dialog/edit-cookbook-dialog.component";

import { UserValidateService } from "./services/user-validate.service";
import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";
import { RecipeService } from "./services/recipe.service";
import { CookbookService } from "./services/cookbook.service";
import { RecipeValidateService } from "./services/recipe-validate.service";
import { AuthGuard } from "./guards/auth.guard";
import { CreateRecipeComponent } from "./components/recipes/create-recipe/create-recipe.component";
import { SavedRecipesComponent } from "./components/recipes/saved-recipes/saved-recipes.component";
import { RecipeComponent } from "./components/recipes/recipe/recipe.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent },
  { path: "verify", component: VerifyComponent },
  { path: "login", component: LoginComponent },
  {
    path: "recipes",
    component: RecipesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "cookbooks",
    component: CookbooksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "cookbook/:id",
    component: CookbookComponent,
    canActivate: [AuthGuard]
  },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: "recipes/create",
    component: CreateRecipeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "recipes/saved",
    component: SavedRecipesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "recipe/:id",
    component: RecipeComponent,
    canActivate: [AuthGuard]
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    RecipesComponent,
    ProfileComponent,
    CreateRecipeComponent,
    EditCookbookDialogComponent,
    SavedRecipesComponent,
    RecipeComponent,
    VerifyComponent,
    CookbooksComponent,
    CookbookComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    UserValidateService,
    RecipeValidateService,
    AuthService,
    UserService,
    RecipeService,
    CookbookService,
    AuthGuard,
    Title
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EditCookbookDialogComponent
  ]
})
export class AppModule { }

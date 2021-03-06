import { BrowserModule, Title } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { CookieService } from "ngx-cookie-service";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { VerifyComponent } from "./components/register/verify/verify.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ResultsComponent } from "./components/results/results.component";
import { HistoryComponent } from "./components/history/history.component";
import { RecommendedComponent } from "./components/recommended/recommended.component";
import { CreateComponent } from "./components/create/create.component";
import { RecipeComponent } from "./components/recipe/recipe.component";
import { CookbooksComponent } from "./components/saved-cookbooks/cookbooks.component";
import { SavedRecipesComponent } from "./components/saved-recipes/saved-recipes.component";
import { CookbookComponent } from "./components/cookbook/cookbook.component";
import { InfoComponent } from "./components/info/info.component";

import { EditCookbookDialogComponent } from "./components/cookbook/edit-cookbook-dialog/edit-cookbook-dialog.component";
import { RecipeDialogComponent } from "./components/recipe-dialog/recipe-dialog.component";
import { IngredientDialogComponent } from "./components/create/ingredient-dialog/ingredient-dialog.component";

import { TextLimitPipe } from "./pipes/text-limit.pipe";
import { TextCapitalisePipe } from "./pipes/text-capitalise.pipe";
import { FindImagePipe } from "./pipes/find-image.pipe";

import { AuthGuard } from "./guards/auth.guard";
import { AuthService } from "./services/auth.service";
import { UserValidateService } from "./services/user-validate.service";
import { UserService } from "./services/user.service";
import { RecipeValidateService } from "./services/recipe-validate.service";
import { RecipeService } from "./services/recipe.service";
import { RecipeCreateService } from "./services/recipe-create.service";
import { CookbookService } from "./services/cookbook.service";
import { SidenavService } from "./components/sidenav/sidenav.service";
import { GeneralService } from "./services/general.service";
import { RecipeDialogService } from "./components/recipe-dialog/recipe-dialog.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent },
  { path: "info", component: InfoComponent },
  { path: "verify", component: VerifyComponent },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "results",
    component: ResultsComponent,
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
  { path: "history", component: HistoryComponent, canActivate: [AuthGuard] },
  { path: "recommended", component: RecommendedComponent, canActivate: [AuthGuard] },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: "create",
    component: CreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "recipes",
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
    SidenavComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ResultsComponent,
    ProfileComponent,
    CreateComponent,
    EditCookbookDialogComponent,
    RecipeDialogComponent,
    IngredientDialogComponent,
    SavedRecipesComponent,
    RecipeComponent,
    VerifyComponent,
    CookbooksComponent,
    CookbookComponent,
    InfoComponent,
    HistoryComponent,
    RecommendedComponent,
    TextLimitPipe,
    TextCapitalisePipe,
    FindImagePipe
  ],
  imports: [HttpModule, FormsModule, BrowserModule, RouterModule.forRoot(appRoutes), MatDialogModule, BrowserAnimationsModule, MaterialModule, ReactiveFormsModule, InfiniteScrollModule],
  providers: [
    UserValidateService,
    RecipeValidateService,
    SidenavService,
    AuthService,
    UserService,
    RecipeService,
    RecipeCreateService,
    CookbookService,
    GeneralService,
    RecipeDialogService,
    AuthGuard,
    Title,
    CookieService
  ],
  bootstrap: [AppComponent],
  entryComponents: [EditCookbookDialogComponent, RecipeDialogComponent, IngredientDialogComponent]
})
export class AppModule {}

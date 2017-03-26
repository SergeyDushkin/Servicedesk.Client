import { ModuleWithProviders, NgModule, Component } from '@angular/core';
import { Routes, PreloadAllModules, RouterModule  } from '@angular/router';

// Components
import { HomePage } from './pages/home';

export const routes: Routes = [
    // Root
    { path: '', component: HomePage },
];
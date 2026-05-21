<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/dashboard');
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
Route::get('/settings', fn () => inertia('Settings', ['title' => 'Settings']))->name('settings');
Route::get('/blank-page', fn () => inertia('BlankPage', ['title' => 'Blank Page']))->name('blank-page');
Route::get('/signin', fn () => inertia('SignIn', ['title' => 'Sign In']))->name('signin');
Route::get('/signup', fn () => inertia('SignUp', ['title' => 'Sign Up']))->name('signup');
Route::get('/invoice', fn () => inertia('Invoice', ['title' => 'Invoice']))->name('invoice');
Route::get('/notifications', fn () => inertia('Notifications', ['title' => 'Notifications']))->name('notifications');
Route::get('/tables', fn () => inertia('Tables', ['title' => 'Tables']))->name('tables');
Route::get('/form-elements', fn () => inertia('FormElements', ['title' => 'Form Elements']))->name('form-elements');
Route::get('/buttons', fn () => inertia('Buttons', ['title' => 'Buttons']))->name('buttons');
Route::get('/alerts', fn () => inertia('Alerts', ['title' => 'Alerts']))->name('alerts');
Route::get('/cards', fn () => inertia('Cards', ['title' => 'Cards']))->name('cards');
Route::get('/typography', fn () => inertia('Typography', ['title' => 'Typography']))->name('typography');
Route::get('/icons', fn () => inertia('Icons', ['title' => 'Icons']))->name('icons');
Route::get('/mdi-icons', fn () => inertia('MdiIcons', ['title' => 'MDI Icons']))->name('mdi-icons');

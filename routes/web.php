<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/clear', function() {

    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('config:cache');
    Artisan::call('view:clear');
 
    return "Cleared!";
 
 });

 
Route::get('/', function () {
    return view('main.home');
});

Auth::routes();

Route::get('/generate_roi', [App\Http\Controllers\Cron::class, 'generate_roi'])->name('generate_roi');
Route::get('/reward_bonus', [App\Http\Controllers\Cron::class, 'reward_bonus'])->name('reward_bonus');
Route::get('/matching_bonus', [App\Http\Controllers\Cron::class, 'matching_bonus'])->name('matching_bonus');
Route::get('/referral_bonus', [App\Http\Controllers\Cron::class, 'referral_bonus'])->name('referral_bonus');


Route::post('login', [App\Http\Controllers\Login::class, 'login'])->name('login');
Route::get('forgot-password', [App\Http\Controllers\Login::class, 'forgot_password'])->name('forgot-password');
Route::any('forgot_submit', [App\Http\Controllers\Login::class, 'forgot_password_submit'])->name('forgot_submit');
Route::any('submitResetPassword', [App\Http\Controllers\Login::class, 'submitResetPassword'])->name('submitResetPassword');
Route::any('verifyCode', [App\Http\Controllers\Login::class, 'verifyCode'])->name('verifyCode');
Route::get('codeVerify', [App\Http\Controllers\Login::class, 'codeVerify'])->name('codeVerify');
Route::get('resetPassword', [App\Http\Controllers\Login::class, 'resetPassword'])->name('resetPassword');

Route::post('/getUserName', [App\Http\Controllers\Register::class, 'getUserNameAjax'])->name('getUserName');
Route::post('/registers', [App\Http\Controllers\Register::class, 'register'])->name('registers');
Route::get('/register_sucess', [App\Http\Controllers\Register::class, 'index'])->name('register_sucess');
Route::get('/user-kyc', [App\Http\Controllers\Register::class, 'user_kyc'])->name('user-kyc');
Route::post('/submit-kyc', [App\Http\Controllers\Register::class, 'kyc_with_register'])->name('submit-kyc');

Route::get('/Index', [App\Http\Controllers\FrontController::class, 'index'])->name('Index');
Route::get('/about-us', [App\Http\Controllers\FrontController::class, 'about_us'])->name('about-us');
Route::get('/services', [App\Http\Controllers\FrontController::class, 'services'])->name('services');
Route::get('/faq', [App\Http\Controllers\FrontController::class, 'faq'])->name('faq');
Route::get('/games', [App\Http\Controllers\FrontController::class, 'games'])->name('games');
Route::get('/support', [App\Http\Controllers\FrontController::class, 'support'])->name('support');
Route::get('/contact', [App\Http\Controllers\FrontController::class, 'contact'])->name('contact');
Route::get('/pricing', [App\Http\Controllers\FrontController::class, 'pricing'])->name('pricing');
Route::get('/bank', [App\Http\Controllers\FrontController::class, 'bank'])->name('bank');


Route::get('/home', [App\Http\Controllers\UserPanel\Dashboard::class, 'index'])->name('main.home');

Route::prefix('user')->group(function ()
{
Route::middleware('auth')->group(function ()
{
Route::get('/dashboard', [App\Http\Controllers\UserPanel\Dashboard::class, 'index'])->name('user.dashboard');
Route::get('/new-register', [App\Http\Controllers\UserPanel\Dashboard::class, 'new_register'])->name('user.new-register');
Route::get('/register_sucess', [App\Http\Controllers\UserPanel\Dashboard::class, 'register_sucess'])->name('user.register_sucess');
Route::post('/register', [App\Http\Controllers\UserPanel\Dashboard::class, 'register'])->name('user.register');
Route::get('/courses', [App\Http\Controllers\UserPanel\Dashboard::class, 'courses'])->name('user.courses');

// profile

Route::get('/profile', [App\Http\Controllers\UserPanel\Profile::class, 'index'])->name('user.profile');
Route::post('/update-profile', [App\Http\Controllers\UserPanel\Profile::class, 'profile_update'])->name('user.update-profile');
Route::get('/ChangePass', [App\Http\Controllers\UserPanel\Profile::class, 'change_password'])->name('user.ChangePass');
Route::get('/trx-password', [App\Http\Controllers\UserPanel\Profile::class, 'trx_change_password'])->name('user.trx-password');
Route::get('/BankDetail', [App\Http\Controllers\UserPanel\Profile::class, 'BankDetail'])->name('user.BankDetail');

Route::post('/edit-password', [App\Http\Controllers\UserPanel\Profile::class, 'change_password_post'])->name('user.edit-password');
Route::post('/bank-update', [App\Http\Controllers\UserPanel\Profile::class, 'bank_profile_update'])->name('user.bank-update');
Route::post('/change-trxpasswword', [App\Http\Controllers\UserPanel\Profile::class, 'change_trxpassword_post'])->name('user.change-trxpasswword');
// end profile


// add fund

Route::get('/AddFund', [App\Http\Controllers\UserPanel\AddFund::class, 'index'])->name('user.AddFund');
Route::post('/transfer-to-user-submit', [App\Http\Controllers\UserPanel\AddFund::class, 'SubmitTransferFund'])->name('user.transfer-to-user-submit');
Route::get('/transfer-fund', [App\Http\Controllers\UserPanel\AddFund::class, 'transfer_to_user'])->name('user.transfer-fund');
Route::get('/fundHistory', [App\Http\Controllers\UserPanel\AddFund::class, 'fundHistory'])->name('user.fundHistory');
Route::get('/transfer-reports', [App\Http\Controllers\UserPanel\AddFund::class, 'transferReport'])->name('user.transfer-reports');
Route::any('/SubmitBuyFund', [App\Http\Controllers\UserPanel\AddFund::class, 'SubmitBuyFund'])->name('user.SubmitBuyFund');
// end add fund

// invest
Route::get('/invest', [App\Http\Controllers\UserPanel\Invest::class, 'index'])->name('user.invest');
Route::post('/fundActivation', [App\Http\Controllers\UserPanel\Invest::class, 'fundActivation'])->name('user.fundActivation');
Route::get('/DepositHistory', [App\Http\Controllers\UserPanel\Invest::class, 'invest_list'])->name('user.DepositHistory');

// end invest


//mobile recharge
Route::get('/mobile', [App\Http\Controllers\UserPanel\Invest::class, 'mobile'])->name('user.mobile');

// withdraw
Route::get('/withdraw-request', [App\Http\Controllers\UserPanel\WithdrawRequest::class, 'index'])->name('user.withdraw-request');
Route::post('/WithdrawRequest', [App\Http\Controllers\UserPanel\WithdrawRequest::class, 'WithdrawRequest'])->name('user.Withdraw-Request');
Route::get('/WithdrawHistory', [App\Http\Controllers\UserPanel\WithdrawRequest::class, 'WithdrawHistory'])->name('user.Withdraw-History');
// end withdraw

//team
Route::get('/referral-team', [App\Http\Controllers\UserPanel\Team::class, 'index'])->name('user.referral-team');
Route::get('/level-team', [App\Http\Controllers\UserPanel\Team::class, 'LevelTeam'])->name('user.level-team');
Route::get('/left-team', [App\Http\Controllers\UserPanel\Team::class, 'leftteam'])->name('user.left-team');
Route::get('/right-team', [App\Http\Controllers\UserPanel\Team::class, 'rightteam'])->name('user.right-team');
Route::get('/tree-view', [App\Http\Controllers\UserPanel\Team::class, 'genealogy'])->name('user.tree-view');
Route::any('/UsrBinaryReport',[App\Http\Controllers\UserPanel\BinaryReport::class,'userReport'])->name('UsrBinaryReport');

//end team

//bonus
Route::get('/level-income', [App\Http\Controllers\UserPanel\Bonus::class, 'index'])->name('user.level-income');
Route::get('/matching-bonus', [App\Http\Controllers\UserPanel\Bonus::class, 'matchingBonus'])->name('user.matching-bonus');
Route::get('/direct-income', [App\Http\Controllers\UserPanel\Bonus::class, 'direct_income'])->name('user.direct-income');
Route::get('/reward-bonus', [App\Http\Controllers\UserPanel\Bonus::class, 'reward_income'])->name('user.reward-bonus');
Route::get('/roi-bonus', [App\Http\Controllers\UserPanel\Bonus::class, 'roi_income'])->name('user.roi-bonus');
Route::get('/gap-margin-bonus', [App\Http\Controllers\UserPanel\Bonus::class, 'gap_margin_bonus'])->name('user.gap-margin-bonus');
//end bonus

//tickets
Route::get('/GenerateTicket',[App\Http\Controllers\UserPanel\Tickets::class,'GenerateTicket'])->name('user.GenerateTicket');
Route::get('/ticket',[App\Http\Controllers\UserPanel\Tickets::class,'ticket'])->name('user.ticket');
Route::post('/SubmitTicket',[App\Http\Controllers\UserPanel\Tickets::class,'SubmitTicket'])->name('user.SubmitTicket');
Route::get('/SupportMessage',[App\Http\Controllers\UserPanel\Tickets::class,'SupportMessage'])->name('user.SupportMessage');
Route::get('/ViewMessage',[App\Http\Controllers\UserPanel\Tickets::class,'ViewMessage'])->name('user.ViewMessage');

//end tickets

});
});


// admin

Route::prefix('admin')->group(function () {
Route::get('/admin-login', [App\Http\Controllers\Admin\AdminLogin::class, 'index'])->name('admin.admin-login');
Route::post('LoginAction', [App\Http\Controllers\Admin\AdminLogin::class, 'admin_login'])->name('admin.LoginAction');
Route::get('/admin-logout', [App\Http\Controllers\Admin\AdminLogin::class, 'admin_sign_out'])->name('admin.admin-logout');
Route::group(['middleware' => ['admin']], function ()
{

 Route::get('/dashboard', [App\Http\Controllers\Admin\Dashboard::class, 'index'])->name('admin.dashboard');
 Route::get('/add-bank-details', [App\Http\Controllers\Admin\Dashboard::class, 'add_bank_detail'])->name('admin.add-bank-details');
 Route::get('/view-bank-detail', [App\Http\Controllers\Admin\Dashboard::class, 'view_bank_detail'])->name('admin.view-bank-detail');
 Route::get('/edit-bank-kyc', [App\Http\Controllers\Admin\Dashboard::class, 'edit_bank_kyc'])->name('admin.edit-bank-kyc');
 Route::get('/remove-bank-detail', [App\Http\Controllers\Admin\Dashboard::class, 'remove_bank_detail'])->name('admin.remove-bank-detail');

 
 Route::post('/update-user-kyc-detail', [App\Http\Controllers\Admin\Dashboard::class, 'users_bank_kyc'])->name('admin.update-user-kyc-detail');
 
 Route::get('/changePassword', [App\Http\Controllers\Admin\Dashboard::class, 'changePassword'])->name('admin.changePassword');
 Route::post('/change-password-post', [App\Http\Controllers\Admin\Dashboard::class, 'change_password_post'])->name('admin.change-password-post');
 
 // active users controller
 
Route::get('user-activation', [App\Http\Controllers\Admin\UserController::class, 'user_activation'])->name('admin.user-activation');
 Route::any('activate_admin_post', [App\Http\Controllers\Admin\UserController::class, 'activate_admin_post'])->name('admin.activate_admin_post');
 // usercontroller
 Route::get('/totalusers', [App\Http\Controllers\Admin\UserController::class, 'alluserlist'])->name('admin.totalusers');
 Route::get('/active-users', [App\Http\Controllers\Admin\UserController::class, 'active_users'])->name('admin.active-users');
 Route::get('/pending-user', [App\Http\Controllers\Admin\UserController::class, 'pending_users'])->name('admin.pending-user');
 Route::get('/edit-users', [App\Http\Controllers\Admin\UserController::class, 'edit_users'])->name('admin.edit-users');
 Route::get('edit-user-view/{id}', [App\Http\Controllers\Admin\UserController::class, 'edit_users_view'])->name('admin.edit-user-view');

 Route::any('update-user-profile', [App\Http\Controllers\Admin\UserController::class, 'users_profile_update'])->name('admin.update-user-profile');
 Route::get('/block-users', [App\Http\Controllers\Admin\UserController::class, 'block_users'])->name('admin.block-users');
 Route::get('block-submit', [App\Http\Controllers\Admin\UserController::class, 'block_submit'])->name('admin.block-submit');

 //end userController

//DepositManagmentController
 Route::get('/deposit-request', [App\Http\Controllers\Admin\DepositController::class, 'deposit_request'])->name('admin.deposit-request');
 Route::get('/rejected-deposit', [App\Http\Controllers\Admin\DepositController::class, 'rejected_deposit'])->name('admin.rejected-deposit');
 
 Route::get('/deposit-list', [App\Http\Controllers\Admin\DepositController::class, 'deposit_list'])->name('admin.deposit-list');
 Route::get('deposit_request_done', [App\Http\Controllers\Admin\DepositController::class, 'deposit_request_done'])->name('admin.deposit_request_done');
// end DepositManagmentController

//fundController
 Route::get('Add-fund-list', [App\Http\Controllers\Admin\FundController::class, 'add_fund_report'])->name('admin.add-fund-list');
 Route::get('fund-report', [App\Http\Controllers\Admin\FundController::class, 'fund_report'])->name('admin.fund-report');
 
 Route::get('fund_request_done', [App\Http\Controllers\Admin\FundController::class, 'fund_request_done'])->name('admin.fund_request_done');
 Route::get('Add-fund-Report', [App\Http\Controllers\Admin\FundController::class, 'add_fund_reports'])->name('Add-fund-Report');
 Route::get('transfer_report', [App\Http\Controllers\Admin\FundController::class, 'transfer_report'])->name('admin.transfer_report');

//end fundController

//bonusController
Route::get('roi-bonus', [App\Http\Controllers\Admin\BonusController::class, 'roi_bonus'])->name('admin.roi-bonus');
Route::get('level-bonus', [App\Http\Controllers\Admin\BonusController::class, 'level_bonus'])->name('admin.level-bonus');
Route::get('direct-bonus', [App\Http\Controllers\Admin\BonusController::class, 'direct_bonus'])->name('admin.direct-bonus');
Route::get('sponsor-bonus', [App\Http\Controllers\Admin\BonusController::class, 'sponsor_bonus'])->name('admin.sponsor-bonus');
Route::get('reward-bonus', [App\Http\Controllers\Admin\BonusController::class, 'reward_bonus'])->name('admin.reward-bonus');


// withdraw
Route::get('pendingWithdrawal', [App\Http\Controllers\Admin\WithdrawController::class, 'pendingWithdrawal'])->name('admin.pendingWithdrawal');
Route::get('payment-ledgers', [App\Http\Controllers\Admin\WithdrawController::class, 'paymentledgers'])->name('admin.payment-ledgers');

Route::get('withdraw_request_done', [App\Http\Controllers\Admin\WithdrawController::class, 'withdraw_request_done'])->name('admin.withdraw_request_done');
Route::get('rejectedWithdrawal', [App\Http\Controllers\Admin\WithdrawController::class, 'rejectedWithdrawal'])->name('admin.rejectedWithdrawal');
Route::get('approvedWithdrawal', [App\Http\Controllers\Admin\WithdrawController::class, 'approvedWithdrawal'])->name('admin.approvedWithdrawal');
Route::any('/withdraw_request_done_multiple', [App\Http\Controllers\Admin\WithdrawController::class, 'withdraw_request_done_multiple'])->name('admin.withdraw_request_done_multiple');

// support


Route::get('support-query', [App\Http\Controllers\Admin\SupportController::class, 'index'])->name('admin.support-query');
Route::get('get_support_msg', [App\Http\Controllers\Admin\SupportController::class, 'get_support_msg'])->name('admin.get_support_msg');
Route::get('close_ticket_', [App\Http\Controllers\Admin\SupportController::class, 'close_ticket_'])->name('admin.close_ticket_');
Route::get('reply_support_msg', [App\Http\Controllers\Admin\SupportController::class, 'reply_support_msg'])->name('admin.reply_support_msg');
Route::post('admin_ticket_submit', [App\Http\Controllers\Admin\SupportController::class, 'admin_ticket_submit'])->name('admin.admin_ticket_submit');

});

});

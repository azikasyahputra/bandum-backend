<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_faq';

    protected $fillable = [
        'vTitle', 
        'vIsi', 
        'eTampil',
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($faq) {
            $faq->iCreatedid = auth()->id();
            $faq->iUpdatedid = auth()->id();
        });

        static::updating(function ($faq) {
            $faq->iUpdatedid = auth()->id();
        });
    }
    
    public function createdBy(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'iCreatedid');
    }

    public function updatedBy(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'iUpdatedid');
    }
}

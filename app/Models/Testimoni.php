<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimoni extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_testimoni';

    protected $fillable = [
        'iIdTransaksi', 
        'iIdUser', 
        'vJudul', 
        'vReview', 
        'eTampil', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($testimoni) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            $testimoni->iCreatedid = auth()->id();
            $testimoni->iUpdatedid = auth()->id();
        });

        static::updating(function ($testimoni) {
            $testimoni->iUpdatedid = auth()->id();
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

    public function userOrder(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'iIdUser');
    }

    public function tranksaksi(): HasOne
    {
        return $this->hasOne(TransaksiOrderHeader::class, 'iId', 'iIdTransaksi');
    }
}

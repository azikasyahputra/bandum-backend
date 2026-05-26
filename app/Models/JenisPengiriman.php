<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JenisPengiriman extends Model
{
    protected $primaryKey = 'iId';
    protected $table = 'master_jenis_pengiriman';

    protected $fillable = [
        'iIdExpedisi', 
        'vNama', 
        'eDeleted'
    ];

    const CREATED_AT = 'tCreated';
    const UPDATED_AT = 'tUpdated';

    protected static function booted(): void
    {
        static::creating(function ($jenispengiriman) {
            $jenispengiriman->iCreatedid = auth()->id();
            $jenispengiriman->iUpdatedid = auth()->id();
        });

        static::updating(function ($jenispengiriman) {
            $jenispengiriman->iUpdatedid = auth()->id();
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
